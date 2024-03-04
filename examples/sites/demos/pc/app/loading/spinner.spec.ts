import { test, expect } from '@playwright/test'

test('自定义加载图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#spinner')
  const loadingText = page.locator('.tiny-loading__text')

  const svg = page.locator('#tiny-demo-loading-spinner .tiny-icon-loading')
  await expect(loadingText).toContainText('自定义 loading 图标')
  await expect(svg).toHaveClass(/tiny-icon-loading/)
})
