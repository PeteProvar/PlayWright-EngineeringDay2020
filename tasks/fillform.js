const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const site = 'https://www.provartesting.com/contact';
  const context = await browser.newContext();
  const page = await context.newPage();
  page.setViewportSize({ width: 1000, height: 800 });
  await page.goto(site);

  page.on('pageerror', console.log);

  await page.waitForSelector(
    '#gform_submit_button_11',
  );

  await page.waitForTimeout(1000);
  const rejectCookiesHandler = await page.$('.cookiebar__reject');
  const firstNameHandler = await page.$('#input_11_1');
  const lastNameHandler = await page.$('#input_11_2');
  const companyHandler = await page.$('#input_11_4');
  const emailHandler = await page.$('#input_11_5');
  const phoneNumberHandler = await page.$('#input_11_6');
  const countryHandler = await page.$('#input_11_10');
  const firstContactHandler = await page.$('#input_11_11');
  const textArea = await page.$('#input_11_8');

  await rejectCookiesHandler.click({ delay: 100 });
  await firstNameHandler.type('Provar', { delay: 100 });
  await lastNameHandler.type('Testing', { delay: 100 });
  await companyHandler.type('Provar Testing', { delay: 100 });
  await emailHandler.type('pete.haughie@provartesting.com', { delay: 100 });
  await phoneNumberHandler.type('+1-202-555-0153', { delay: 100 });
  await countryHandler.selectOption('Germany', { delay: 100 });
  await firstContactHandler.selectOption('Other', { delay: 100 });
  await textArea.type('Hello from the Provar Testing Engineering Day Hands On Microsoft Playwright workshop', { delay: 100 });

  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'screenshot.png', fullpage: true });

  await page.waitForTimeout(1000);

  await browser.close();
})();