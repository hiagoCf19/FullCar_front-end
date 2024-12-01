import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Expect a title "to contain" a substring.
  await page.goto("http://localhost:3000/");
  await page.getByRole("banner").getByRole("link").getByRole("button").click();
  await page.getByPlaceholder("e-mail").click();
  await page.getByPlaceholder("e-mail").fill("hiagocelmo337@gmail.com");
  await page.getByPlaceholder("e-mail").dblclick();
  await page.getByPlaceholder("e-mail").press("Insert");
  await page.getByPlaceholder("e-mail").fill("higmail.com");
  await page.getByPlaceholder("e-mail").click();
  await page.getByPlaceholder("e-mail").fill("hiagoferreira@id.uff.br");
  await page.getByPlaceholder("senha").click();
  await page.getByPlaceholder("senha").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Login" }).click();
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
