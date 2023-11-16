import { test, expect } from '@playwright/test'

test('时间格式化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#format')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor > input')
  const timeSelect = page.locator('.tiny-time-panel')
  const hourSelect = timeSelect.locator('.tiny-scrollbar').first()
  const valueSpan = preview.locator('span.select-time')

  await expect(timePicker).toHaveValue('18:30:00')
  await expect(valueSpan).toHaveText('当前选中时间：1476095400000')
  await timePicker.click()
  await hourSelect.locator('.tiny-time-spinner__item').filter({ hasText: '19' }).click()
  await timeSelect.getByRole('button', { name: '确定' }).click()
  await expect(timePicker).toHaveValue('19:30:00')
  await expect(valueSpan).toHaveText('当前选中时间：1476099000000')

  // 测试 am/pm 格式
  const timePickerFormat = preview.locator('.tiny-date-editor')

  await expect(timePickerFormat.first().locator('input')).toHaveValue('06:40:00 pm')
  await expect(timePickerFormat.nth(1).locator('input')).toHaveValue('18:40:00 pm')
})
