import { test, expect } from '@playwright/test'

test('自定义开关图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch##custom-open-close-icon')

  const demo = page.locator('#custom-open-close-icon')
  const switchBtn = demo.locator('.tiny-switch')

  await expect(switchBtn.first()).toHaveAttribute('class', 'tiny-svg')
})
