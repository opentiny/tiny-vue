import { test, expect } from '@playwright/test'

test('下拉框的类名', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#popper-class')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor > input')
  const timeSelect = preview.locator('.tiny-time-panel')

  await timePicker.click()
  await expect(timeSelect).toBeVisible()
  await expect(timeSelect).toHaveClass(/pickerClass/)
})
