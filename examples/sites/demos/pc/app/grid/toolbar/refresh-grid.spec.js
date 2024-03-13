import { test, expect } from '@playwright/test'

test('开启表格刷新功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#toolbar-refresh-grid')
  await page.waitForTimeout(300)
  await page.locator('.tiny-grid-refresh__btn').click()
  await expect(page.locator('.tiny-grid-loading').first()).toBeVisible()
})
