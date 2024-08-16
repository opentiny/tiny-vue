import { test, expect } from '@playwright/test'

test('清除按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#clearable')

  const timePickerDefaultClearIcon = page.getByRole('textbox', { name: '18:40:00' }).first()
  const timePickerHideClearIcon = page.getByRole('textbox', { name: '18:40:00' }).nth(1)
  const timePickerCustomClearIcon = page.getByRole('textbox', { name: '18:40:00' }).nth(2)
  const closeIcon = page.locator('.tiny-date-editor--time svg.baseClearicon')

  // 默认显示清除按钮
  await timePickerDefaultClearIcon.hover()
  await expect(closeIcon).toBeVisible()

  // 隐藏清除按钮
  await timePickerHideClearIcon.hover()
  await expect(closeIcon).not.toBeVisible()

  // 自定义清除按钮图标
  await timePickerCustomClearIcon.hover()
  await expect(closeIcon).toBeVisible()

  // 测试清除功能
  await timePickerDefaultClearIcon.hover()
  await closeIcon.first().click()
  await expect(page.getByRole('textbox').nth(1)).toHaveValue('')
})
