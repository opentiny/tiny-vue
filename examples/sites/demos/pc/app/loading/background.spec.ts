import { test, expect } from '@playwright/test'

test('自定义遮罩背景色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#background')

  const demo = page.locator('#background')
  const loadingBg = demo.locator('.tiny-loading__mask')
  await expect(loadingBg).toHaveCSS('background-color', 'rgba(0, 0, 0, 0.2)')
})
