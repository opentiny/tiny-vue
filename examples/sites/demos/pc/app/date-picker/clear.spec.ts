import { test, expect } from '@playwright/test'

test('[DatePicker] 测试清除输入', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#clear')

  const datePickerDefaultClearIcon = page.getByRole('textbox', { name: '2023-05-24' }).first()
  const datePickerHideClearIcon = page.getByRole('textbox', { name: '2023-05-24' }).nth(1)
  const datePickerCustomClearIcon = page.getByRole('textbox', { name: '2023-05-24' }).nth(2)
  const clearIcon = page.locator('.tiny-date-editor .tiny-input__icon-container .baseClearicon')

  // 默认显示清除按钮
  await datePickerDefaultClearIcon.hover()
  await expect(clearIcon).toBeVisible()
  await expect(clearIcon.locator('path')).toHaveAttribute('d', 'M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm4.8-8.4L13.2 12l3.6-3.6c.3-.3.3-.9 0-1.2-.3-.3-.9-.3-1.2 0L12 10.8 8.4 7.2c-.3-.3-.9-.3-1.2 0s-.3.9 0 1.2l3.6 3.6-3.6 3.6c-.3.3-.3.9 0 1.2.2.1.4.2.6.2s.4-.1.6-.2l3.6-3.6 3.6 3.6c.2.2.4.2.6.2.2 0 .4-.1.6-.2.3-.4.3-.9 0-1.2z')

  // 隐藏清除按钮
  await datePickerHideClearIcon.hover()
  await expect(clearIcon).not.toBeVisible()

  // 自定义清除图标
  await datePickerCustomClearIcon.hover()
  await expect(clearIcon).toBeVisible()
  await expect(clearIcon.locator('path')).toHaveAttribute('d', 'm13.4 12 6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z')

  // 测试清除功能
  await expect(datePickerCustomClearIcon).toHaveValue('2023-05-24')
  await page.locator('.tiny-input__icon-container > svg > .st0').click()
  await expect(datePickerCustomClearIcon).not.toBeVisible()
})
