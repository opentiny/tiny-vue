import { test, expect } from '@playwright/test'

test('自定义后置图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#suffix-icon')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor')
  const customIcon = timePicker.locator('svg')
  await expect(customIcon).toBeVisible()
  await expect(customIcon.locator('path')).toHaveAttribute(
    'd',
    'M19.1 13H4.9c-.5 0-.9-.4-.9-1s.4-1 .9-1h14.2c.5 0 .9.4.9 1s-.4 1-.9 1z'
  )
})
