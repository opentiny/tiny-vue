import { test, expect } from '@playwright/test'

test('开启表格全屏功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#tiny-first-menu-grid-full-screen')
  await page.locator('.tiny-grid-fullscreen__btn').click()
  await expect(page.getByText('不阻止全屏')).toBeVisible()
  await expect(page.getByText('全屏了')).toBeVisible()
  await expect(page.locator('.tiny-grid__wrapper').first()).toHaveCSS('position', 'fixed')
  await page.locator('.tiny-grid-fullscreen__btn').click()
  await expect(page.locator('.tiny-grid__wrapper').first()).not.toHaveCSS('position', 'fixed')
})
