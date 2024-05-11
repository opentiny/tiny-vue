import { test, expect } from '../fixtures'

test('base', async ({ page }) => {
  await page.goto('chart-map#map-base')
  const chart = page.locator('#map-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})
