import { test } from '@ianwalter/bff'

test('My personal site', async t => {
  const { page } = await t.chromium({ args: ['--no-sandbox'] })
  await page.goto('https://click.a-ads.com/1845539/98644/')
  await page.waitForTimeout(10000)
})