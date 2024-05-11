import { test, expect } from '../fixtures'

test('base', async ({ page }) => {
  await page.goto('chart-pie#pie-base')
  const chart = page.locator('#pie-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-pie#pie-demo2')
  const chart = page.locator('#pie-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-pie#pie-demo3')
  const chart = page.locator('#pie-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-pie#pie-demo4')
  const chart = page.locator('#pie-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-pie#pie-demo5')
  const chart = page.locator('#pie-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
  await page.goto('chart-pie#pie-demo6')
  const chart = page.locator('#pie-demo6 .hui-chart')
  await expect(chart).toHaveScreenshot('demo6.png')
})

test('demo7', async ({ page }) => {
  await page.goto('chart-pie#pie-demo7')
  const chart = page.locator('#pie-demo7 .hui-chart')
  await expect(chart).toHaveScreenshot('demo7.png')
})
