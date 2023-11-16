import { test, expect } from '@playwright/test'

test('当前值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#format-tooltip')
  const preview = page.locator('#preview')
  const slider = preview.locator('.tiny-slider__wrapper > .tiny-slider')
  const sliderText = slider.locator('div').nth(2)
  await expect(sliderText).toHaveText('当前值为：20')
})
