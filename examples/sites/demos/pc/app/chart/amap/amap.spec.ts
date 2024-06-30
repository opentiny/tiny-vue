import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-autonavi-map')
  const chart = page.locator('#amap-base .amap-layers')
  await expect(chart).toHaveScreenshot('base.png')
})
