import { test, expect } from '@playwright/test'

test('当前值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#format-tooltip')
  const slider = page.locator('.tiny-slider-container .tiny-slider')
  const sliderText = slider.locator('div').nth(2)
  await expect(sliderText).toHaveText('当前值为：20')
})
