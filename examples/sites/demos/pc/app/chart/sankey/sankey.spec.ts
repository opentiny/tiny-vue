import { test, expect, config } from '../fixtures'

test('base', async ({ page }) => {
  config.waitTime = 5000
  await page.goto('chart-sankey#sankey-base')
  await expect(page.locator('#sankey-base .hui-chart')).toBeInViewport()
  await expect(page).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  config.waitTime = 3000
  await page.goto('chart-sankey#sankey-demo2')
  await expect(page.locator('#sankey-demo2 .hui-chart')).toBeInViewport()
  await expect(page).toHaveScreenshot('demo2.png')
})
