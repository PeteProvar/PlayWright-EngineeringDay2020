const { webkit } = require('playwright');

(async () => {
  await page.waitForTimeout(1000);
  await browser.close();
})();