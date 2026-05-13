const { test, expect } = require("@playwright/test");
const pages = require("./pages.json");

const BASE = "http://localhost:8080";

test.describe("Local build smoke tests", () => {
  for (const page of pages) {
    test(`${page.path} — status, title, structure, content`, async ({ page: p }) => {
      test.setTimeout(15000);

      const resp = await p.goto(`${BASE}${page.path}`, { waitUntil: "domcontentloaded" });
      expect(resp.status()).toBe(200);

      const title = await p.title();
      expect(title).toBe(page.title);

      expect(await p.locator("body").count()).toBe(1);
      expect(await p.locator("#masthead").count()).toBe(1);
      expect(await p.locator("#colophon").count()).toBe(1);
      expect(await p.locator(".entry-content").count()).toBe(1);
      expect(await p.locator(".lang-switcher").count()).toBe(1);
      expect(await p.locator("#ast-hf-menu-1 a").count()).toBeGreaterThan(0);

      const bodyText = await p.locator("body").innerText();
      expect(bodyText.toLowerCase()).toContain(page.snippet.toLowerCase());
    });
  }
});

test.describe("Live site comparison", () => {
  for (const page of pages) {
    test(`${page.path} — key snippet exists on live site`, async ({ page: p }) => {
      test.setTimeout(15000);

      const resp = await p.goto(`https://iaestespain.github.io/WEB${page.path}`, {
        waitUntil: "domcontentloaded",
      });
      expect(resp.status()).toBe(200);

      const bodyText = await p.locator("body").innerText();
      expect(bodyText.toLowerCase()).toContain(page.snippet.toLowerCase());
    });
  }
});
