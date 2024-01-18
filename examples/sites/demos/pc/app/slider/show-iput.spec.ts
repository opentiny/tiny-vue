import { test, expect } from '@playwright/test'

test('输入框模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#show-input')

  const sliderInput = page.locator('.tiny-slider-container .tiny-slider__input input')
  const sliderBlock = page.locator('.tiny-slider-container .tiny-slider .tiny-slider__handle')

  await sliderInput.click()
  await sliderInput.fill('60')

  await sliderBlock.hover()

  await expect(page.locator('.tiny-slider-container .tiny-slider .tiny-slider__tips')).toHaveText('60')
})
