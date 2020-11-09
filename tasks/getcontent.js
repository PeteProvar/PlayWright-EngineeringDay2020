const { webkit } = require('playwright');

(async () => {
  const site = "https://en.wikipedia.org/wiki/Berlin";
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on('pageerror', console.log);

  await page.goto(site, {
    waitUntil: 'networkidle',
  });

  const html = await page.content();
  console.log(html);

  await browser.close();
})();