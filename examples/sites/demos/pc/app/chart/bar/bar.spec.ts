import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-bar#bar-base')
  const chart = page.locator('#bar-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-bar#bar-demo2')
  const chart = page.locator('#bar-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-bar#bar-demo3')
  const chart = page.locator('#bar-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-bar#bar-demo4')
  const chart = page.locator('#bar-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-bar#bar-demo5')
  const chart = page.locator('#bar-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
  await page.goto('chart-bar#bar-demo6')
  const chart = page.locator('#bar-demo6 .hui-chart')
  await expect(chart).toHaveScreenshot('demo6.png')
})

test('demo7', async ({ page }) => {
  await page.goto('chart-bar#bar-demo7')
  const chart = page.locator('#bar-demo7 .hui-chart')
  await expect(chart).toHaveScreenshot('demo7.png')
})
