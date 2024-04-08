import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-gauge#gauge-base')
  const chart = page.locator('#gauge-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-gauge#gauge-demo2')
  const chart = page.locator('#gauge-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-gauge#gauge-demo3')
  const chart = page.locator('#gauge-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-gauge#gauge-demo4')
  const chart = page.locator('#gauge-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-gauge#gauge-demo5')
  const chart = page.locator('#gauge-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
  await page.goto('chart-gauge#gauge-demo6')
  const chart = page.locator('#gauge-demo6 .hui-chart')
  await expect(chart).toHaveScreenshot('demo6.png')
})
