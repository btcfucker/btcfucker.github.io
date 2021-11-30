console.log('hello world');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://click.a-ads.com/1845539/98644/');
  await page.screenshot({ path: 'example.png' });
  await page.waitForTimeout(10000);
  await browser.close();
})();