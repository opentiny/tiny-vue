import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-scatter#scatter-base')
  const chart = page.locator('#scatter-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-scatter#scatter-demo2')
  const chart = page.locator('#scatter-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-scatter#scatter-demo3')
  const chart = page.locator('#scatter-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})
