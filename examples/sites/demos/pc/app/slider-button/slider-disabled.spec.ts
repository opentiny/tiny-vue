import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider-button#slider-disabled')

  const demo = page.locator('#slider-disabled')
  const group1 = demo.locator('.tiny-slider-button-group').nth(0)
  const group2 = demo.locator('.tiny-slider-button-group').nth(1)
  const group1Buttons = group1.locator('.tiny-slider-button')
  const group2Buttons = group2.locator('.tiny-slider-button')

  // 单项禁用
  await expect(group1Buttons.nth(0)).toHaveAttribute('aria-disabled', 'true')
  await expect(group1Buttons.nth(0)).toHaveAttribute('aria-checked', 'true')
  await expect(group1Buttons.nth(0).locator('input')).toBeDisabled()
  await expect(group1Buttons.nth(0).locator('.tiny-slider-button__text')).toHaveClass(
    /tiny-slider-button__text--fill-brand-disabled/
  )
  await expect(group1Buttons.nth(1)).toHaveAttribute('aria-disabled', 'false')
  await expect(group1Buttons.nth(2)).toHaveAttribute('aria-disabled', 'true')
  await expect(group1Buttons.nth(2).locator('input')).toBeDisabled()

  await group1Buttons.nth(1).click()
  await expect(group1Buttons.nth(1)).toHaveAttribute('aria-checked', 'true')
  await expect(group1Buttons.nth(0)).toHaveAttribute('aria-checked', 'false')

  // 禁用项点击不切换
  await group1Buttons.nth(2).click({ force: true })
  await expect(group1Buttons.nth(1)).toHaveAttribute('aria-checked', 'true')
  await expect(group1Buttons.nth(2)).toHaveAttribute('aria-checked', 'false')

  // 整组禁用
  await expect(group2Buttons).toHaveCount(4)
  for (let i = 0; i < 4; i++) {
    await expect(group2Buttons.nth(i)).toHaveAttribute('aria-disabled', 'true')
    await expect(group2Buttons.nth(i).locator('input')).toBeDisabled()
  }
  await expect(group2Buttons.nth(0)).toHaveAttribute('aria-checked', 'true')
  await group2Buttons.nth(1).click({ force: true })
  await expect(group2Buttons.nth(0)).toHaveAttribute('aria-checked', 'true')
  await expect(group2Buttons.nth(1)).toHaveAttribute('aria-checked', 'false')
})
