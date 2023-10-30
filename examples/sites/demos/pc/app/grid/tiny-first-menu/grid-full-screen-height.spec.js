import { test, expect } from '@playwright/test'

test('全屏时改变表格高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#tiny-first-menu-grid-full-screen-height')
  await page.locator('.tiny-grid-fullscreen__btn').click()
  await expect(page.locator('.tiny-grid').nth(1)).toHaveCSS('height', '680px')
})
