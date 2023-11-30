import { test, expect } from '@playwright/test'

test('原生属性name', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#name')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor > input')

  await expect(timePicker).toHaveAttribute('name', 'name')
})
