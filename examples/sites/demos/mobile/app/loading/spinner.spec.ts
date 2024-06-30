import { test, expect } from '@playwright/test'

test('自定义加载图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#spinner')

  const loading = page.locator('#spinner .tiny-mobile-loading')
  const loadingText = loading.locator('.tiny-mobile-loading__text')
  const svg = loading.locator('.tiny-mobile-loading__spinner')

  await expect(loadingText).toContainText('自定义 loading 图标')
  await expect(svg).toBeVisible()
})
