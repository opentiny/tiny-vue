import { test, expect } from '@playwright/test'

test('加减按钮的显示与隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#controls')
  const demo = page.locator('#controls')
  const numeric1 = demo.locator('.tiny-numeric').nth(0)
  const numeric2 = demo.locator('.tiny-numeric').nth(1)

  await expect(numeric1.locator('.tiny-numeric__decrease')).toHaveCount(0)

  await expect(numeric2.locator('.tiny-numeric__decrease')).toBeVisible()
})
