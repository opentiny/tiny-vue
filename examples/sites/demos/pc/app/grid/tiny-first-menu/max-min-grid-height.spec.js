import { test, expect } from '@playwright/test'

test('设置 maxHeight 最大高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-width-height#tiny-first-menu-max-min-grid-height')
  const grid = page.locator('.tiny-grid__body-wrapper')
  await expect(grid).toHaveCSS('max-height', '72px')
})
