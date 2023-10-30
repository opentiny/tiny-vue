import { test, expect } from '@playwright/test'

test('测试 Alert 不显示图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#show-icon')

  const noIconAlert = page.locator('.tiny-alert')
  await expect(noIconAlert.locator('.tiny-alert__icon')).toHaveCount(0)
})
