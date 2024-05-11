import { test, expect } from '../fixtures'

test('base', async ({ page }) => {
  await page.goto('chart-radar#radar-base')
  const chart = page.locator('#radar-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-radar#radar-demo2')
  const chart = page.locator('#radar-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-radar#radar-demo3')
  const chart = page.locator('#radar-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})
