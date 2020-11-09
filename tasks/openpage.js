const { webkit } = require('playwright');

(async () => {
  const site = "https://en.wikipedia.org/wiki/Berlin";
  const browser = await webkit.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(site);
  page.on('pageerror', console.log);
  await browser.close();
})();