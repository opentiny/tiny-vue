import { test, expect } from '@playwright/test'

test('测试 Alert 自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#icon')

  // 自定义图标和默认图标不同
  const iconCustomAlert = page.locator('.tiny-alert').nth(0)

  await expect(iconCustomAlert.locator('.tiny-alert__icon:nth-child(1) path')).toHaveAttribute(
    'd',
    /M13 3v1h-2V3h2zm-1.+1h2v-2h-2c-1\.4 0-2\.8-\.5-4-1\.3z/
  )
})
