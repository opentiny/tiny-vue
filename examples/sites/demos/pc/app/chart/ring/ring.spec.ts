import { test, expect, config } from '../fixtures'

config.waitTime = 5000
test('base', async ({ page }) => {
  await page.goto('chart-ring#ring-base')
  await expect(page.locator('#ring-base .hui-chart')).toBeInViewport()
  await expect(page).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-ring#ring-demo2')
  const chart = page.locator('#ring-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-ring#ring-demo3')
  const chart = page.locator('#ring-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-ring#ring-demo4')
  const chart = page.locator('#ring-demo4 .hui-chart')
  await expect(chart).toBeVisible()
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  config.waitTime = 5000
  await page.goto('chart-ring#ring-demo5')
  const chart = page.locator('#ring-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
  await page.goto('chart-ring#ring-demo6')
  const chart = page.locator('#ring-demo6 .hui-chart')
  await expect(chart).toHaveScreenshot('demo6.png')
})

test('ring-title', async ({ page }) => {
  await page.goto('chart-ring#ring-ring-title')
  const chart = page.locator('#ring-ring-title .hui-chart')
  await expect(chart).toBeVisible()
  await expect(chart).toHaveScreenshot('ring-title.png')
})
