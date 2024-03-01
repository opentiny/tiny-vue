import { test, expect } from '@playwright/test'

test('[DatePicker] 测试清除输入', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#clear')

  const datePickerDefaultClearIcon = page.getByRole('textbox').nth(1)
  const datePickerHideClearIcon = page.getByRole('textbox').nth(2)
  const datePickerCustomClearIcon = page.getByRole('textbox').nth(3)
  const clearIcon = page.locator('.tiny-date-editor .tiny-input__icon-container .baseClearicon')

  // 默认显示清除按钮
  await datePickerDefaultClearIcon.hover()
  await expect(clearIcon).toBeVisible()
  await expect(clearIcon.locator('path')).toHaveAttribute(
    'd',
    'm13.4 12 6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z'
  )

  // 隐藏清除按钮
  await datePickerHideClearIcon.hover()
  await expect(clearIcon).not.toBeVisible()

  // 自定义清除图标
  await datePickerCustomClearIcon.hover()
  await expect(clearIcon).toBeVisible()
  await expect(clearIcon.locator('path')).toHaveAttribute(
    'd',
    'm13.4 12 6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z'
  )

  // 测试清除功能
  await expect(datePickerCustomClearIcon).toHaveValue('2023-05-24')
  await page.locator('.close_svg__st0').first().click()
  await expect(datePickerCustomClearIcon).toHaveValue('')
})
