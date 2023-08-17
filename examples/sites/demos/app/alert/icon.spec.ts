import { test, expect } from '@playwright/test'

test('测试 Alert 自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/icon')

  // 自定义图标和默认图标不同
  const iconCustomAlert = page.locator('.tiny-alert--success').nth(0)
  const alert = page.locator('.tiny-alert--success').nth(1)

  await expect(iconCustomAlert.locator('.tiny-alert__icon path')).toHaveCount(2)
  await expect(alert.locator('.tiny-alert__icon path')).toHaveCount(3)
})
