import { test, expect } from '@playwright/test'

test('自定义遮罩背景色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#background')

  const loading = page.locator('#background .tiny-mobile-loading')
  await expect(loading).toHaveCSS('background-color', 'rgba(25, 25, 25, 0.376)')
})
