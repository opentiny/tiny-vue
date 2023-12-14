import { test, expect } from '@playwright/test'

test('手动聚焦失焦', async ({ page }) => {
  await page.goto('select#manual-focus-blur')
  const wrap = page.locator('#manual-focus-blur')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const button = wrap.locator('.tiny-button')

  await page.waitForTimeout(2000)
  // 手动聚焦下拉
  await button.nth(0).click()
  await expect(dropdown).toBeVisible()

  // 手动失焦收起
  await button.nth(1).click()
  await expect(dropdown).toBeHidden()
})
