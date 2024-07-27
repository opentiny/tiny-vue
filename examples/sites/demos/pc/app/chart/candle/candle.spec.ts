import { test, expect } from '../fixtures'

test('base', async ({ page }) => {
  await page.goto('chart-candle#candle-base')
  const chart = page.locator('#candle-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-candle#candle-demo2')
  const chart = page.locator('#candle-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-candle#candle-demo3')
  const chart = page.locator('#candle-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-candle#candle-demo4')
  const chart = page.locator('#candle-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-candle#candle-demo5')
  const chart = page.locator('#candle-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
  await page.goto('chart-candle#candle-demo6')
  const chart = page.locator('#candle-demo6 .hui-chart')
  await expect(chart).toHaveScreenshot('demo6.png')
})
