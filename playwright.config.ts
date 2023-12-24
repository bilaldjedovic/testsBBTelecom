import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 40000,
  //globalTimeout: 60000,
  expect: {
    timeout: 20000,
  },

  reporter: "html",

  use: {
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
