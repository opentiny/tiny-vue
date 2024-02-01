import { test, expect } from '@playwright/test'

test('下拉框的类名', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#popper-class')

  const timePicker = page.getByRole('textbox', { name: '18:40:00' })
  const timeSelect = page.locator('.tiny-date-container > div:nth-child(2)')

  // TINY-TODO: 时间选择下拉框位置出现偏移
  await timePicker.click()
  await expect(timeSelect).toBeVisible()
  await expect(timeSelect).toHaveClass(/picker-class/)
})
