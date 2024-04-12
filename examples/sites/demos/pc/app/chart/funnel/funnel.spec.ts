import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-funnel#funnel-base')
  const chart = page.locator('#funnel-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-funnel#funnel-demo2')
  const chart = page.locator('#funnel-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-funnel#funnel-demo3')
  const chart = page.locator('#funnel-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-funnel#funnel-demo4')
  const chart = page.locator('#funnel-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-funnel#funnel-demo5')
  const chart = page.locator('#funnel-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
  await page.goto('chart-funnel#funnel-demo6')
  const chart = page.locator('#funnel-demo6 .hui-chart')
  await expect(chart).toHaveScreenshot('demo6.png')
})

test('demo7', async ({ page }) => {
  await page.goto('chart-funnel#funnel-demo7')
  const chart = page.locator('#funnel-demo7 .hui-chart')
  await expect(chart).toHaveScreenshot('demo7.png')
})
