import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#size')

  // 默认尺寸
  const timePicker = page.getByRole('textbox', { name: '18:40:00' })
  const timePickerRange = page.locator('div:nth-child(2) > .tiny-date-editor')
  await expect(timePicker).toHaveCSS('height', '28px')
  await expect(timePickerRange).toHaveCSS('height', '28px')

  // medium
  page.getByRole('radio', { name: 'medium' }).filter({ hasText: 'medium' }).click()
  // TINY-TODO: 日期和日期范围的输入框高度不一致
  await expect(page.locator('.tiny-input-medium .tiny-input__inner')).toHaveCSS('height', '40px')
  await expect(page.locator('.tiny-range-editor--medium.tiny-input__inner')).toHaveCSS('height', '42px')

  // small
  page.getByRole('radio', { name: 'small' }).filter({ hasText: 'small' }).click()
  // TINY-TODO: 日期和日期范围的输入框高度不一致
  await expect(timePicker).toHaveCSS('height', '32px')
  await expect(timePickerRange).toHaveCSS('height', '36px')

  // mini
  page.getByRole('radio', { name: 'mini' }).filter({ hasText: 'mini' }).click()
  await expect(timePicker).toHaveCSS('height', '24px')
  await expect(timePickerRange).toHaveCSS('height', '24px')
})
