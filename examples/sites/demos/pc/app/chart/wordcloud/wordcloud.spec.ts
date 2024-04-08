import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-wordcloud#wordcloud-base')
  const chart = page.locator('#wordcloud-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-wordcloud#wordcloud-demo2')
  const chart = page.locator('#wordcloud-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-wordcloud#wordcloud-demo3')
  const chart = page.locator('#wordcloud-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-wordcloud#wordcloud-demo4')
  const chart = page.locator('#wordcloud-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})
