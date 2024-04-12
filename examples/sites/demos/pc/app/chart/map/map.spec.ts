import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-map#map-base')
  const chart = page.locator('#map-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})
