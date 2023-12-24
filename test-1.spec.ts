import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill("bilal");
  await page.locator('input[type="text"]').press("Tab");
  await page.locator('input[type="password"]').fill("123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("tab", { name: "My profile" }).click();
  await page.getByRole("button", { name: "Edit Profile" }).click();
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByRole("button", { name: "Save Changes" }).click();
  await page.getByRole("tab", { name: "Plans" }).click();
  await page
    .getByRole("link", { name: "Standard Plan Cost per month" })
    .click();
  await page.getByRole("tab", { name: "Feedback" }).click();
  await page.getByRole("tab", { name: "Poll Form" }).click();
  await page.getByRole("tab", { name: "Subscription" }).click();
  await page.getByRole("tab", { name: "Home" }).click();
  await page.getByRole("tab", { name: "Devices" }).click();
  await page
    .getByRole("link", { name: "Apple iPhone 13 Apple iPhone" })
    .click();
  await page.getByRole("button", { name: "Back" }).click();
});
