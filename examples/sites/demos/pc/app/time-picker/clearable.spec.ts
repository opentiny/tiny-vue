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
  await expect(closeIcon.locator('path')).toHaveAttribute('d', 'm13.4 12 6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z')

  // 隐藏清除按钮
  await timePickerHideClearIcon.hover()
  await expect(closeIcon).not.toBeVisible()

  // 自定义清除按钮图标
  await timePickerCustomClearIcon.hover()
  await expect(closeIcon).toBeVisible()
  await expect(closeIcon.locator('path').first()).toHaveAttribute('d', 'M14 7c0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7 7 3.13 7 7z')
  await expect(closeIcon.locator('path').nth(1)).toHaveAttribute('d', 'M9.96 9.29c.09.09.14.21.14.34 0 .13-.05.25-.14.33a.47.47 0 0 1-.67 0L7 7.67 4.71 9.96c-.18.18-.49.18-.67 0a.483.483 0 0 1 0-.67L6.33 7 4.04 4.71c-.09-.09-.14-.21-.14-.34s.05-.25.14-.34c.18-.18.49-.18.67 0L7 6.33l2.29-2.29c.19-.18.49-.18.67 0 .09.09.14.21.14.34s-.05.25-.14.34L7.67 7l2.29 2.29z')

  // 测试清除功能
  await timePickerDefaultClearIcon.hover()
  await closeIcon.first().click()
  await expect(page.getByRole('textbox').nth(1)).toHaveValue('')
})
