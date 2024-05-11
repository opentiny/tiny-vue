import { test, expect } from '../fixtures'

test('base', async ({ page }) => {
  await page.goto('chart-histogram#histogram-base')
  const chart = page.locator('#histogram-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-histogram#histogram-demo2')
  const chart = page.locator('#histogram-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-histogram#histogram-demo3')
  const chart = page.locator('#histogram-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-histogram#histogram-demo4')
  const chart = page.locator('#histogram-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-histogram#histogram-demo5')
  const chart = page.locator('#histogram-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
  await page.goto('chart-histogram#histogram-demo6')
  const chart = page.locator('#histogram-demo6 .hui-chart')
  await expect(chart).toHaveScreenshot('demo6.png')
})

test('demo7', async ({ page }) => {
  await page.goto('chart-histogram#histogram-demo7')
  const chart = page.locator('#histogram-demo7 .hui-chart')
  await expect(chart).toHaveScreenshot('demo7.png')
})

test('demo8', async ({ page }) => {
  await page.goto('chart-histogram#histogram-demo8')
  const chart = page.locator('#histogram-demo8 .hui-chart')
  await expect(chart).toHaveScreenshot('demo8.png')
})
