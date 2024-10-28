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
  await expect(clearIcon.locator('path').nth(0)).toHaveAttribute('d', /^M12\.49 3\.3a.+22\.71 0Z$/)

  // 隐藏清除按钮
  await datePickerHideClearIcon.hover()
  await expect(clearIcon).not.toBeVisible()

  // 自定义清除图标
  await datePickerCustomClearIcon.hover()
  await expect(clearIcon).toBeVisible()
  await expect(clearIcon.locator('path').nth(0)).toHaveAttribute('d', /^M12\.49 3\.3a.+22\.71 0Z$/)

  // 测试清除功能
  await expect(datePickerCustomClearIcon).toHaveValue('2023-05-24')
  await page.locator('#clear').getByRole('img').nth(2).click()
  await expect(datePickerCustomClearIcon).toHaveValue('')
})
