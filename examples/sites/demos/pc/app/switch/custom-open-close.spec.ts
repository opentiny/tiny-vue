import { test, expect } from '@playwright/test'

test('自定义开关显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#custom-open-close')

  const demo = page.locator('#custom-open-close')
  const switchBtn = demo.locator('.tiny-switch')

  await expect(switchBtn.first()).toHaveText('OFF')
  await expect(switchBtn.nth(1)).toHaveText('否')
  await switchBtn.first().click()
  await switchBtn.nth(1).click()
  await expect(switchBtn.first()).toHaveText('ON')
  await expect(switchBtn.nth(1)).toHaveText('是')
})
