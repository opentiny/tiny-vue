import { test, expect } from '@playwright/test'

test('设置气泡确认框宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#width')

  const demo = page.locator('#width')
  const popConfirm = demo.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')

  await popConfirm.hover()
  await expect(popConfirmPopover).toBeVisible()
  await expect(popConfirmPopover).toHaveCSS('width', '200px')
})
