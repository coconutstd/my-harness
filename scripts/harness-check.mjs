import { execSync } from "node:child_process";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const docsDir = path.join(rootDir, "docs");
const tasksDir = path.join(docsDir, "tasks");

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function run(command) {
  return execSync(command, {
    cwd: rootDir,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function parseFrontmatter(filePath) {
  const content = readText(filePath);
  const match = content.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    throw new Error(`Frontmatter not found: ${filePath}`);
  }

  const data = {};

  for (const line of match[1].split("\n")) {
    const entry = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);

    if (!entry) {
      continue;
    }

    let [, key, value] = entry;
    value = value.trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return data;
}

function parseMarkdownTable(markdown, heading) {
  const headingPattern = new RegExp(`## ${escapeRegExp(heading)}\\n\\n`, "m");
  const headingMatch = headingPattern.exec(markdown);

  if (!headingMatch) {
    return [];
  }

  const startIndex = headingMatch.index + headingMatch[0].length;
  const rest = markdown.slice(startIndex);
  const nextHeadingIndex = rest.search(/\n## /);
  const section = nextHeadingIndex === -1 ? rest : rest.slice(0, nextHeadingIndex);

  const lines = section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|"));

  if (lines.length < 2) {
    return [];
  }

  const headers = splitRow(lines[0]);
  const rows = [];

  for (const line of lines.slice(2)) {
    const cells = splitRow(line);
    if (cells.length !== headers.length) {
      continue;
    }

    rows.push(
      Object.fromEntries(headers.map((header, index) => [header, cells[index]])),
    );
  }

  return rows;
}

function splitRow(row) {
  return row
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractTaskId(value) {
  const match = value.match(/TASK-\d+/);
  return match ? match[0] : null;
}

function findTaskFiles() {
  return readdirSync(tasksDir)
    .filter((name) => /^TASK-\d+\.md$/.test(name))
    .map((name) => path.join(tasksDir, name))
    .sort();
}

function assertFileExists(relativePath, failures) {
  const absolutePath = path.join(rootDir, relativePath);

  try {
    if (!statSync(absolutePath).isFile()) {
      failures.push(`${relativePath}: expected a file`);
    }
  } catch {
    failures.push(`${relativePath}: file not found`);
  }
}

function main() {
  const failures = [];
  const tasksIndexPath = path.join(tasksDir, "_index.md");
  const progressPath = path.join(docsDir, "progress", "current.md");
  const indexPath = path.join(docsDir, "INDEX.md");
  const currentBranch = run("git branch --show-current");

  const taskFiles = findTaskFiles();
  const taskIndexDoc = readText(tasksIndexPath);
  const taskRows = parseMarkdownTable(taskIndexDoc, "태스크 현황 요약");
  const taskRowsById = new Map(taskRows.map((row) => [row.ID, row]));

  for (const filePath of taskFiles) {
    const task = parseFrontmatter(filePath);
    const taskId = task.id?.toUpperCase();
    const indexRow = taskRowsById.get(taskId);

    if (!indexRow) {
      failures.push(`docs/tasks/_index.md: missing row for ${taskId}`);
      continue;
    }

    if (indexRow["제목"] !== task.title) {
      failures.push(
        `docs/tasks/_index.md: title mismatch for ${taskId} ("${indexRow["제목"]}" != "${task.title}")`,
      );
    }

    if (indexRow["상태"] !== task.status) {
      failures.push(
        `docs/tasks/_index.md: status mismatch for ${taskId} ("${indexRow["상태"]}" != "${task.status}")`,
      );
    }

    if (indexRow["우선순위"] !== task.priority) {
      failures.push(
        `docs/tasks/_index.md: priority mismatch for ${taskId} ("${indexRow["우선순위"]}" != "${task.priority}")`,
      );
    }
  }

  for (const row of taskRows) {
    const taskId = row.ID;
    assertFileExists(`docs/tasks/${taskId}.md`, failures);
  }

  const inProgressTasks = taskRows
    .filter((row) => row["상태"] === "in-progress")
    .map((row) => row.ID);

  const progressDoc = readText(progressPath);
  const progressFrontmatter = parseFrontmatter(progressPath);
  const updatedReason = progressFrontmatter.updated_reason ?? "";
  const latestTaskId = extractTaskId(updatedReason);
  const progressHasNoActiveTasks = /## 진행 중\n\n\(없음\)/m.test(progressDoc);

  if (inProgressTasks.length === 0 && !progressHasNoActiveTasks) {
    failures.push(
      "docs/progress/current.md: tasks index has no in-progress tasks, but progress doc still lists active work",
    );
  }

  if (inProgressTasks.length > 0 && progressHasNoActiveTasks) {
    failures.push(
      `docs/progress/current.md: tasks index has in-progress tasks (${inProgressTasks.join(", ")}), but progress doc says "(없음)"`,
    );
  }

  if (inProgressTasks.length > 0 && latestTaskId && !inProgressTasks.includes(latestTaskId)) {
    failures.push(
      `docs/progress/current.md: updated_reason references ${latestTaskId}, but in-progress tasks are ${inProgressTasks.join(", ")}`,
    );
  }

  const indexDoc = readText(indexPath);
  const progressIndexRow = parseMarkdownTable(indexDoc, "전체 컨텍스트 목록").find(
    (row) => row.id === "progress-current",
  );

  if (!progressIndexRow) {
    failures.push("docs/INDEX.md: missing progress-current row");
  } else if (latestTaskId && !progressIndexRow.description.includes(latestTaskId)) {
    failures.push(
      `docs/INDEX.md: progress-current description does not mention ${latestTaskId}`,
    );
  }

  const branchingIds = parseMarkdownTable(indexDoc, "전체 컨텍스트 목록")
    .map((row) => row.id)
    .filter((id) => id.startsWith("branching-"));

  if (branchingIds.includes("branching-active")) {
    failures.push(
      "docs/INDEX.md: branching-active should not be listed; branch state is Git-derived now",
    );
  }

  if (failures.length > 0) {
    console.error("Harness check failed:\n");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exit(1);
  }

  console.log("Harness check passed.");
  console.log(`Current branch: ${currentBranch}`);
  console.log(`Task files checked: ${taskFiles.length}`);
}

main();
