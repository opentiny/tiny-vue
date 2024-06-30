import { test, expect } from '@playwright/test'

test('自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull)
  await page.goto('alert#icon')

  const alert = page.locator('.tiny-mobile-alert')

  await expect(alert.locator('.tiny-mobile-alert__icon').first()).toBeVisible()
  await expect(alert.locator('.tiny-mobile-alert__content')).toContainText('自定义图标')
})
