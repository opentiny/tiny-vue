import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-heatmap#heatmap-base')
  const chart = page.locator('#heatmap-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-heatmap#heatmap-demo2')
  const chart = page.locator('#heatmap-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-heatmap#heatmap-demo3')
  const chart = page.locator('#heatmap-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-heatmap#heatmap-demo4')
  const chart = page.locator('#heatmap-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-heatmap#heatmap-demo5')
  const chart = page.locator('#heatmap-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})
