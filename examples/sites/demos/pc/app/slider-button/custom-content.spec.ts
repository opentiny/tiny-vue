import { test, expect } from '@playwright/test'

test('自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider-button#custom-content')

  const demo = page.locator('#custom-content')
  const sliderButtons = demo.locator('.tiny-slider-button')
  const modal = page.locator('.tiny-modal')

  await expect(sliderButtons.nth(0)).toHaveText('label1')
  await expect(sliderButtons.nth(1)).toHaveText('label')
  await expect(sliderButtons.nth(2)).toHaveText('label3')
  await expect(sliderButtons.nth(3)).toHaveText('label4')
  await expect(sliderButtons.nth(0)).toHaveAttribute('aria-checked', 'true')

  await sliderButtons.nth(1).click()
  await expect(modal.filter({ hasText: 'change 事件，选中的 Radio label 值为：label' })).toBeVisible()
  await expect(sliderButtons.nth(1)).toHaveAttribute('aria-checked', 'true')

  await sliderButtons.nth(3).click()
  await expect(modal.filter({ hasText: 'change 事件，选中的 Radio label 值为：label4' })).toBeVisible()
  await expect(sliderButtons.nth(3)).toHaveAttribute('aria-checked', 'true')
})
