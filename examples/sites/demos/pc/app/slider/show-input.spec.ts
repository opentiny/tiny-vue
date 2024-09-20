import { test, expect } from '@playwright/test'

test('输入框模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#show-input')

  const sliderInput = page.locator('.tiny-slider-container .tiny-slider__input .tiny-input__inner')
  const sliderBlock = page.locator('.tiny-slider-container .tiny-slider .tiny-slider__handle')
  const sliderTip = page.locator('.tiny-slider-container .tiny-slider .tiny-slider__tips')

  // 单输入框
  const singleInput = sliderInput.nth(0)
  const singleBlock = sliderBlock.nth(0)

  await singleInput.nth(0).click()
  await singleInput.nth(0).fill('60')
  await singleBlock.hover()
  await expect(sliderTip.nth(0)).toHaveText('60')

  await page.waitForTimeout(200)
  // 双输入框
  await sliderInput.nth(1).click()
  await sliderInput.nth(1).fill('70')
  await expect(sliderInput.nth(1)).toHaveValue('70')
  await sliderInput.nth(1).blur()
  await expect(sliderInput.nth(1)).toHaveValue('60')
})
