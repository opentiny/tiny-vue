import { test, expect } from '@playwright/test'

test('时间显示am/pm', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-picker/time-low')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor')

  await expect(timePicker.first().locator('input')).toHaveValue('06:40:00 pm')
  await expect(timePicker.nth(1).locator('input')).toHaveValue('18:40:00 pm')
})
