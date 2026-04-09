import { expect, test } from "@playwright/test";

test.describe("todo app smoke", () => {
  test("renders and supports add, toggle, delete, and persistence", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "할 일 목록" })).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "새 할 일 입력" }),
    ).toBeVisible();

    const input = page.getByRole("textbox", { name: "새 할 일 입력" });
    await input.fill("Playwright smoke test");
    await input.press("Enter");

    const itemText = page.getByText("Playwright smoke test");
    await expect(itemText).toBeVisible();
    await expect(page.getByText("1개 중 1개 남음")).toBeVisible();

    const toggle = page.getByRole("checkbox", {
      name: "완료 토글: Playwright smoke test",
    });
    await toggle.check();
    await expect(itemText).toHaveClass(/line-through/);
    await expect(page.getByText("1개 중 0개 남음")).toBeVisible();

    await page.reload();
    await expect(page.getByText("Playwright smoke test")).toBeVisible();
    await expect(
      page.getByRole("checkbox", {
        name: "완료 토글: Playwright smoke test",
      }),
    ).toBeChecked();

    await page.getByRole("button", { name: "삭제: Playwright smoke test" }).click();
    await expect(page.getByText("Playwright smoke test")).toHaveCount(0);
    await expect(
      page.getByText("추가 버튼 또는 Enter 키로 할 일을 추가하세요."),
    ).toBeVisible();
  });
});
