import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('floatbar#custom-style')

  const floatbar = page.locator('.tiny-float-bar')
  const item = page.getByRole('listitem').filter({ hasText: '本地引入' })
  await expect(floatbar).toHaveClass(/custom/)
  await expect(floatbar).toHaveCSS('background-color', 'rgb(219, 219, 219)')
  await item.hover()
  await expect(item).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(item.locator('a')).toHaveCSS('color', 'rgb(25, 25, 25)')
})
