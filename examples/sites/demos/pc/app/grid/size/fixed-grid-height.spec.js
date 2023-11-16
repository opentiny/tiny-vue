import { test, expect } from '@playwright/test'

test('表格属性设置高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-width-height#tiny-first-menu-fixed-grid-height')
  const grid = page.locator('.tiny-grid__wrapper')
  const { height } = await grid.boundingBox()
  await expect(height).toEqual(200)
})
