// test_title_for_pari.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Playwright website title check', () => {
  // Массив браузеров для теста
  const browsers = ['chromium', 'firefox'];

  for (const browserType of browsers) {
    test(`Check page title in ${browserType}`, async ({ playwright }) => {
      // Запуск браузеров
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage();

      // Переход на сайт
      await page.goto('https://playwright.dev/');

      // Проверка заголовка
      const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
      const title = await page.title();
      await expect(title).toBe(expectedTitle);

      // Закрываем браузеры, хе-хе
      await browser.close();
    });
  }
});