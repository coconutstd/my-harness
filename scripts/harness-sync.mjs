import { execSync } from "node:child_process";

function run(command) {
  return execSync(command, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function list(command) {
  const output = run(command);
  return output
    .split("\n")
    .map((line) => line.replace(/^[* ]+/, "").trim())
    .filter(Boolean);
}

const currentBranch = run("git branch --show-current");
const mergedBranches = list("git branch --merged main").filter(
  (branch) => branch !== "main" && branch !== currentBranch,
);

console.log("Harness sync status");
console.log(`Current branch: ${currentBranch}`);

if (mergedBranches.length === 0) {
  console.log("Merged into main: (none)");
} else {
  console.log("Merged into main:");
  for (const branch of mergedBranches) {
    console.log(`- ${branch}`);
  }
}

console.log("Branch state is Git-derived and is not written back to docs.");
