import { test, expect } from '@playwright/test'

test('刻度标记', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#marks')

  const points = page.locator('.tiny-slider-container .tiny-slider__mark-point')

  await expect(points.nth(0)).toHaveAttribute('style', /left: 10%/)
  await expect(points.nth(1)).toHaveAttribute('style', /left: 40%/)
  await expect(points.nth(2)).toHaveAttribute('style', /left: 50%/)
})
