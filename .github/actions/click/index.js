const { chromium } = require('playwright');
const launchOptions = {
    proxy: {
        server: '178.212.54.137:8080'
    }
};
(async () => {
    try{
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage();
  await page.goto('https://click.a-ads.com/1845539/98644/');
  await page.waitForTimeout(10000);
  await page.screenshot({ path: `example.png` });
  await browser.close();}
  catch{}
})();
