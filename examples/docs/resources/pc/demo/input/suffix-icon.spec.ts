import { test, expect } from '@playwright/test'

test('尾部图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/suffix-icon')
  const suffix = page.locator('.demo-input > .tiny-input > div > .tiny-input__suffix')
  await expect(suffix).toBeVisible()
})
