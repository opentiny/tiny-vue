import { test, expect } from '@playwright/test'

test('自定义表头样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom-style#custom-style-header-style')
  await expect(page.locator('.header__row--red')).toHaveCSS('background-color', 'rgb(219, 112, 147)')
  await expect(page.locator('.header__cell--blue')).toHaveCSS('background-color', 'rgb(45, 183, 245)')
  await expect(page.locator('.header-blue')).toHaveCSS('background-color', 'rgb(45, 183, 245)')
})
