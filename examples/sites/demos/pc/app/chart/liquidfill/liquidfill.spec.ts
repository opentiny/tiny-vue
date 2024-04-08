import { test, expect } from '@playwright/test'

test('demo5', async ({ page }) => {
  await page.goto('chart-liquidfill#liquidfill-demo5')
  const chart = page.locator('#liquidfill-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})
