import { test, expect } from '@playwright/test'

test('支持数据渲染', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider-button#slider-button-options')

  const demo = page.locator('#slider-button-options')
  const sliderButtons = demo.locator('.tiny-slider-button')
  const modal = page.locator('.tiny-modal')

  await expect(sliderButtons).toHaveCount(2)
  await expect(sliderButtons.nth(0)).toHaveText('很好')
  await expect(sliderButtons.nth(1)).toHaveText('一般')
  await expect(sliderButtons.nth(0)).toHaveAttribute('aria-checked', 'true')

  await sliderButtons.nth(0).click()
  await expect(modal.filter({ hasText: 'click' })).toBeVisible()

  await sliderButtons.nth(1).click()
  await expect(sliderButtons.nth(1)).toHaveAttribute('aria-checked', 'true')
  await expect(sliderButtons.nth(0)).toHaveAttribute('aria-checked', 'false')
})
