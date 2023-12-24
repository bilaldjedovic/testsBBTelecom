import { expect, test } from "@playwright/test";

import { PageManager } from "../core/page-objects/page-manager";

test.beforeEach(async ({ page }) => {
  const pageManager = new PageManager(page);

  await pageManager.loginPage().openSauceDemo();
});

test("Login to the page and complete poll form", async ({ page }) => {
  const pageManager = new PageManager(page);

  await pageManager.loginPage().loginToThePageUsingBilalUser();

  expect(page.url()).toContain("/");

  await pageManager.pollFormPage().completePollForm();
});
