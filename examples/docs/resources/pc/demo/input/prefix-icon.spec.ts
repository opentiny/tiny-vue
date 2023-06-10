import { test, expect } from '@playwright/test'

test('头部图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/prefix-icon')
  const prefix = page.locator('.demo-input > .tiny-input-prefix > .tiny-input__prefix')
  await expect(prefix).toBeVisible()
})
