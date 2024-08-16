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
  await expect(clearIcon.locator('path').nth(1)).toHaveAttribute(
    'd',
    'M4.25 3.4 8 7.15l3.75-3.75a.61.61 0 0 1 .85 0c.23.23.23.62 0 .85L8.85 8l3.75 3.75c.23.24.23.62 0 .85a.61.61 0 0 1-.85 0L8 8.85 4.25 12.6a.61.61 0 0 1-.85 0 .592.592 0 0 1 0-.85L7.15 8 3.4 4.25a.61.61 0 0 1 0-.85.61.61 0 0 1 .85 0z'
  )

  // 隐藏清除按钮
  await datePickerHideClearIcon.hover()
  await expect(clearIcon).not.toBeVisible()

  // 自定义清除图标
  await datePickerCustomClearIcon.hover()
  await expect(clearIcon).toBeVisible()
  await expect(clearIcon.locator('path').nth(1)).toHaveAttribute(
    'd',
    'M4.25 3.4 8 7.15l3.75-3.75a.61.61 0 0 1 .85 0c.23.23.23.62 0 .85L8.85 8l3.75 3.75c.23.24.23.62 0 .85a.61.61 0 0 1-.85 0L8 8.85 4.25 12.6a.61.61 0 0 1-.85 0 .592.592 0 0 1 0-.85L7.15 8 3.4 4.25a.61.61 0 0 1 0-.85.61.61 0 0 1 .85 0z'
  )

  // 测试清除功能
  await expect(datePickerCustomClearIcon).toHaveValue('2023-05-24')
  await page.locator('#clear').getByRole('img').nth(2).click()
  await expect(datePickerCustomClearIcon).toHaveValue('')
})
