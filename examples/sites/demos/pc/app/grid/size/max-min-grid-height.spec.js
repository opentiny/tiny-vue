import { test, expect } from '@playwright/test'

test('设置 maxHeight 最大高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-size#size-max-min-grid-height')
  await expect(page.locator('.tiny-grid__body-wrapper').nth(0)).toHaveCSS('max-height', '165px')
  await expect(page.locator('.tiny-grid__body-wrapper').nth(1)).toHaveCSS('min-height', '265px')
})
