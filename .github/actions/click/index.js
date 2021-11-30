const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://click.a-ads.com/1845539/98644/');
  await page.waitForTimeout(10000);
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();
