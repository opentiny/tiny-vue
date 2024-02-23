import { test, expect } from '@playwright/test'

test('自定义后置图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#suffix-icon')

  const customIcon = page.locator('#suffix-icon svg path')
  await expect(customIcon).toHaveAttribute('d', 'M19.1 13H4.9c-.5 0-.9-.4-.9-1s.4-1 .9-1h14.2c.5 0 .9.4.9 1s-.4 1-.9 1z')
})
