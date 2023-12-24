import { Page, expect } from "@playwright/test";
import user from "../data/user-credentials.json";
import url from "../data/urls.json";

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openSauceDemo() {
    await this.page.goto(url.loginPage);
  }

  async loginToThePageUsingBilalUser() {
    await this.page.locator('input[type="text"]').fill(user.username);
    await this.page.locator('input[type="password"]').fill(user.password);

    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
