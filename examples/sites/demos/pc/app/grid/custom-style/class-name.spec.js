import { test, expect } from '@playwright/test'

test('自定义列样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom-style#custom-style-class-name')
  await expect(page.locator('.gridClassName').first()).toHaveCSS('background-color', 'rgb(230, 247, 255)')
})
