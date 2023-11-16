import { test, expect } from '@playwright/test'

test('选择器打开时默认时间设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#default-value')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor > input')
  const timeSelect = page.locator('.tiny-time-panel')
  const confirmBtn = timeSelect.getByRole('button', { name: '确定' })

  await expect(timePicker).toHaveValue('')
  await timePicker.click()
  await expect(timeSelect).toBeVisible()
  await confirmBtn.click()
  await expect(timePicker).toHaveValue('18:40:00')
})
