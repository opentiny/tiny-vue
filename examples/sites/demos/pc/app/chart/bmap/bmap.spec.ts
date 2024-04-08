import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-baidu-map#bmap-base')
  const chart = page.locator('#bmap-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})
