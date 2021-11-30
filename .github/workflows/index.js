(async () => {
    const browser = await playwright.chromium.launch({ args: ['--no-sandbox'] });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://click.a-ads.com/1845539/98644/');
    await page.waitForTimeout(10000);
    await page.screenshot({ path: `example.png` });
    await browser.close();
  
})();