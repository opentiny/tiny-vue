import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#custom-class')

  const loading = page.locator('#custom-class .tiny-mobile-loading')
  const loadingText = loading.locator('.tiny-mobile-loading__text')

  await expect(loading).toHaveCSS('background-color', 'rgba(0, 0, 0, 0.5)')
  await expect(loadingText).toBeVisible()
  await expect(loadingText).toHaveCSS('color', 'rgb(255, 255, 255)')
})
