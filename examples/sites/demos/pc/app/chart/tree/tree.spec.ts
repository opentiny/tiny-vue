import { test, expect } from '../fixtures'

test('base', async ({ page }) => {
  await page.goto('chart-tree#tree-base')
  const chart = page.locator('#tree-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-tree#tree-demo2')
  const chart = page.locator('#tree-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-tree#tree-demo3')
  const chart = page.locator('#tree-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-tree#tree-demo4')
  const chart = page.locator('#tree-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-tree#tree-demo5')
  const chart = page.locator('#tree-demo5 .hui-chart').first()
  await expect(chart).toHaveScreenshot('demo5.png')
})
