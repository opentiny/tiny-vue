import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('floatbar#custom-style')

  const floatbar = page.locator('#preview .tiny-float-bar')
  const item = page.getByRole('listitem').filter({ hasText: 'Default-A' })
  await expect(floatbar).toHaveClass(/custom/)
  await expect(floatbar).toHaveCSS('background-color', 'rgb(222, 184, 135)')
  await item.hover()
  await expect(item).toHaveCSS('background-color', 'rgba(24, 144, 255, 0.06)')
  await expect(item.locator('a')).toHaveCSS('color', 'rgb(255, 255, 255)')
})
