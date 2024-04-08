import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-graph#graph-base')
  const chart = page.locator('#graph-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

// test('demo2', async ({ page }) => {
//   await page.goto('chart-graph#graph-demo2')
//   const chart = page.locator('#graph-demo2 .hui-chart')
//   await expect(chart).toHaveScreenshot('demo2.png')
// })

test('demo3', async ({ page }) => {
  await page.goto('chart-graph#graph-demo3')
  const chart = page.locator('#graph-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})
