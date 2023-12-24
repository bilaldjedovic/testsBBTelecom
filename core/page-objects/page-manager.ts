import { Page } from "@playwright/test";
import { LoginPage } from "./login-page";
import { PollForm } from "./poll-form-page";

export class PageManager {
  private readonly page: Page;
  private readonly login: LoginPage;
  private readonly pollForm: PollForm;

  constructor(page: Page) {
    this.page = page;

    this.login = new LoginPage(this.page);
    this.pollForm = new PollForm(this.page);
  }

  loginPage() {
    return this.login;
  }

  pollFormPage() {
    return this.pollForm;
  }
}
