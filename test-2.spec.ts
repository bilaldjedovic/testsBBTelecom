import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill("bilal");
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill("123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("tab", { name: "Poll Form" }).click();
  await page.getByPlaceholder("Your answer...").click();
  await page.getByPlaceholder("Your answer...").fill("good");
  await page.getByPlaceholder("Your answer...").press("Enter");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByPlaceholder("Your answer...").click();
  await page.getByPlaceholder("Your answer...").fill("good");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByPlaceholder("Your answer...").click();
  await page.getByPlaceholder("Your answer...").fill("good");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByPlaceholder("Your answer...").click();
  await page.getByPlaceholder("Your answer...").fill("good");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByPlaceholder("Your answer...").click();
  await page.getByPlaceholder("Your answer...").fill("good");
  await page.getByRole("button", { name: "Final Submit" }).click();
  await page.getByText("Thank you for answering our").click();
});
