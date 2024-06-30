import { test, expect } from '../fixtures'

test('base', async ({ page }) => {
  await page.goto('chart-baidu-map')
  const chart = page.locator('#bmap-base .hui-chart')
  await expect(chart).toBeInViewport()
  await expect(chart).toHaveScreenshot('base.png', { maxDiffPixelRatio: 0.1 })
})
