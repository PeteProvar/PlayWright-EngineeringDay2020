const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch();
  const site = "https://en.wikipedia.org/wiki/Berlin";
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on('pageerror', console.log);
  try {
    await page.goto(site, {
      waitUntil: 'networkidle',
    });
    await page.waitForSelector('.infobox');

    const repos = await page.evaluate(() => {
      let info_all = document.querySelectorAll('.infobox tr td');
      return Array.from(info_all).map((info) => ({
        info: info.textContent.trim()
      }));
    });
    console.log(repos[27].info)
  } catch (error) {
    console.log(error);
  }

  await browser.close();
})();