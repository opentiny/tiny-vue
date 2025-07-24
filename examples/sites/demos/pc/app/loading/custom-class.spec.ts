import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#custom-class')
  const loadingBg = page.locator('.tiny-loading__mask')
  const loadingText = page.locator('.new-loading')
  await expect(loadingBg).toHaveCSS('background-color', 'rgb(89, 89, 89)')
  await expect(loadingText).toBeVisible()
})
