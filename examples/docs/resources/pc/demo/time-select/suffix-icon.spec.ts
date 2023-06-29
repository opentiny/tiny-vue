import { test, expect } from '@playwright/test'

test('后置图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-select/suffix-icon')
  const icon = page.locator('.tiny-input__icon-container svg')
  await expect(icon).toHaveCount(1)
})
