import { Page, expect } from "@playwright/test";
import answers from "../data/answers.json";

export class PollForm {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async completePollForm() {
    await this.page.getByRole("tab", { name: "Poll Form" }).click();
    await this.page.getByPlaceholder("Your answer...").click();
    await this.page
      .getByPlaceholder("Your answer...")
      .fill(answers.firstAnswer);
    await this.page.getByRole("button", { name: "Next" }).click();
    await this.page.getByPlaceholder("Your answer...").click();
    await this.page
      .getByPlaceholder("Your answer...")
      .fill(answers.secondAnswer);
    await this.page.getByRole("button", { name: "Next" }).click();
    await this.page.getByPlaceholder("Your answer...").click();
    await this.page
      .getByPlaceholder("Your answer...")
      .fill(answers.thirdAnswer);
    await this.page.getByRole("button", { name: "Next" }).click();
    await this.page.getByPlaceholder("Your answer...").click();
    await this.page
      .getByPlaceholder("Your answer...")
      .fill(answers.fourthAnswer);
    await this.page.getByRole("button", { name: "Next" }).click();
    await this.page.getByPlaceholder("Your answer...").click();
    await this.page
      .getByPlaceholder("Your answer...")
      .fill(answers.fifthAnswer);
    await this.page.getByRole("button", { name: "Final Submit" }).click();
  }
}
