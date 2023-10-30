import { test, expect } from '@playwright/test'

test('自定义加载图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#spinner')
  const loadingText = page.locator('.tiny-loading__text')
  const sloading = page.locator('.tiny-loading__spinner-small')
  const mloading = page.locator('.tiny-loading__spinner-medium')
  const lloading = page.locator('.tiny-loading__spinner-large')
  const svg = page.locator('.tiny-loading__spinner-large > svg > defs > linearGradient > stop').nth(1)
  await expect(loadingText).toHaveText(['自定义loading图标', '自定义loading图标', '自定义loading图标'])
  await expect(sloading).toBeVisible()
  await expect(mloading).toBeVisible()
  await expect(lloading).toBeVisible()
  await expect(svg).toHaveAttribute('stop-color', '#191919')
})
