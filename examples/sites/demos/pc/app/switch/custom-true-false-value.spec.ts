import { test, expect } from '@playwright/test'

test('自定义开关取值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#custom-true-false-value')

  const demo = page.locator('#custom-true-false-value')
  const switchBtn = demo.locator('.tiny-switch')

  await expect(demo.locator('.pc-demo')).toHaveText('当前值:yes')
  await switchBtn.click()
  await expect(demo.locator('.pc-demo')).toHaveText('当前值:no')
})
