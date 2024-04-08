import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-sankey#sankey-base')
  const chart = page.locator('#sankey-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-sankey#sankey-demo2')
  const chart = page.locator('#sankey-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})
