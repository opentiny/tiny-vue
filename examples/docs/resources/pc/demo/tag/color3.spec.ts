import { test, expect } from '@playwright/test'

test('是否自定义背景色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/tag/color3')

  const tag = page.locator('.tiny-tag')

  await expect(tag).toHaveCSS('background-color', 'rgba(82, 196, 26, 0.8)')
})
