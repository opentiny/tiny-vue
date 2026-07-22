import { test, expect } from '@playwright/test'

test('类型设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider-button#slider-button-type')

  const demo = page.locator('#slider-button-type')
  const iconGroup = demo.locator('.tiny-slider-button-group').nth(0)
  const textGroup = demo.locator('.tiny-slider-button-group').nth(1)
  const iconButtons = iconGroup.locator('.tiny-slider-button')
  const textButtons = textGroup.locator('.tiny-slider-button')

  await expect(iconButtons).toHaveCount(4)
  await expect(textButtons).toHaveCount(4)
  await expect(iconButtons.nth(0).locator('svg')).toBeVisible()
  await expect(iconButtons.nth(0).locator('.tiny-slider-button__text')).toHaveClass(
    /tiny-slider-button__text--type-icon/
  )
  await expect(textButtons.nth(0).locator('.tiny-slider-button__text')).toHaveClass(/tiny-slider-button__text--normal/)
  await expect(textButtons.nth(0)).toHaveText('选项')

  await iconButtons.nth(1).click()
  await expect(iconButtons.nth(1)).toHaveAttribute('aria-checked', 'true')
  await expect(iconButtons.nth(0)).toHaveAttribute('aria-checked', 'false')

  await textButtons.nth(2).click()
  await expect(textButtons.nth(2)).toHaveAttribute('aria-checked', 'true')
  await expect(textButtons.nth(0)).toHaveAttribute('aria-checked', 'false')
})
