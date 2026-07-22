import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider-button#basic-usage')

  const demo = page.locator('#basic-usage')
  const sliderButtons = demo.locator('.tiny-slider-button')
  const firstButton = sliderButtons.nth(0)
  const secondButton = sliderButtons.nth(1)
  const thirdButton = sliderButtons.nth(2)

  await expect(sliderButtons).toHaveCount(4)
  await expect(firstButton).toHaveAttribute('aria-checked', 'true')
  await expect(firstButton.locator('.tiny-slider-button__text')).toHaveClass(/tiny-slider-button__text--selected/)
  await expect(firstButton.locator('.tiny-slider-button__text')).toHaveCSS('color', 'rgb(20, 118, 255)')

  await secondButton.click()
  await expect(secondButton).toHaveAttribute('aria-checked', 'true')
  await expect(firstButton).toHaveAttribute('aria-checked', 'false')
  await expect(secondButton.locator('.tiny-slider-button__text')).toHaveClass(/tiny-slider-button__text--selected/)

  await thirdButton.click()
  await expect(thirdButton).toHaveAttribute('aria-checked', 'true')
  await expect(secondButton).toHaveAttribute('aria-checked', 'false')
})
