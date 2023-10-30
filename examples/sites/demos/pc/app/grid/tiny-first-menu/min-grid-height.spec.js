import { test, expect } from '@playwright/test'

test('设置 minHeight 最小高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-width-height#tiny-first-menu-min-grid-height')
  const grid = page.locator('.tiny-grid__body-wrapper')
  await expect(grid).toHaveCSS('min-height', '300px')
})
