import { test, expect } from '@playwright/test'

test('可搜索+手动聚焦失焦', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#manual-focus-blur')
  const wrap = page.locator('#manual-focus-blur')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const button = wrap.locator('.demo2 .tiny-button')

  await page.waitForTimeout(2000)
  // 手动聚焦下拉
  await button.nth(0).click()
  await expect(dropdown).toBeVisible()

  // 手动失焦收起
  await button.nth(1).click()
  await expect(dropdown).toBeHidden()
})
