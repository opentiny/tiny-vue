import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-sunburst#sunburst-base')
  const chart = page.locator('#sunburst-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-sunburst#sunburst-demo2')
  const chart = page.locator('#sunburst-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-sunburst#sunburst-demo3')
  const chart = page.locator('#sunburst-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})
