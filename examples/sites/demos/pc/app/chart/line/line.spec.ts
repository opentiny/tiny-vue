import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-line#line-base')
  const chart = page.locator('#line-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-line#line-demo2')
  const chart = page.locator('#line-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-line#line-demo3')
  const chart = page.locator('#line-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

// test('demo4', async ({ page }) => {
//   await page.goto('chart-line#line-demo4')
//   const chart = page.locator('#line-demo4 .hui-chart')
//   await expect(chart).toHaveScreenshot('demo4.png')
// })

test('demo5', async ({ page }) => {
  await page.goto('chart-line#line-demo5')
  const chart = page.locator('#line-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
  await page.goto('chart-line#line-demo6')
  const chart = page.locator('#line-demo6 .hui-chart')
  await expect(chart).toHaveScreenshot('demo6.png')
})

test('demo7', async ({ page }) => {
  await page.goto('chart-line#line-demo7')
  const chart = page.locator('#line-demo7 .hui-chart')
  await expect(chart).toHaveScreenshot('demo7.png')
})

test('demo8', async ({ page }) => {
  await page.goto('chart-line#line-demo8')
  const chart = page.locator('#line-demo8 .hui-chart')
  await expect(chart).toHaveScreenshot('demo8.png')
})

test('demo9', async ({ page }) => {
  await page.goto('chart-line#line-demo9')
  const chart = page.locator('#line-demo9 .hui-chart')
  await expect(chart).toHaveScreenshot('demo9.png')
})
