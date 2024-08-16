import { test, expect } from '@playwright/test'

test('自定义开关图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#custom-open-close-icon')

  const demo = page.locator('#custom-open-close-icon')
  const switchContainer = demo.locator('.tiny-switch')

  const switchBtn = switchContainer.locator('.tiny-switch__button').first()

  const switchIcon = switchBtn.locator('.tiny-svg').first()

  await expect(switchIcon).not.toBeNull()
})
