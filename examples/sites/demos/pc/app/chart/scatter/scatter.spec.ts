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

test('demo4', async ({ page }) => {
  await page.goto('chart-scatter#scatter-demo4')
  const chart = page.locator('#scatter-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-scatter#scatter-demo5')
  const chart = page.locator('#scatter-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
  await page.goto('chart-scatter#scatter-demo6')
  const chart = page.locator('#scatter-demo6 .hui-chart')
  await expect(chart).toHaveScreenshot('demo6.png')
})

test('demo7', async ({ page }) => {
  await page.goto('chart-scatter#scatter-demo7')
  const chart = page.locator('#scatter-demo7 .hui-chart')
  await expect(chart).toHaveScreenshot('demo7.png')
})

test('demo8', async ({ page }) => {
  await page.goto('chart-scatter#scatter-demo8')
  const chart = page.locator('#scatter-demo8 .hui-chart')
  await expect(chart).toHaveScreenshot('demo8.png')
})
