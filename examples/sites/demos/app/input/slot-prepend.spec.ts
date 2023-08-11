import { test, expect } from '@playwright/test'

test('前置内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/slot-prepend')
  const prepend = page.locator('.tiny-input-group__prepend')
  await expect(prepend).toBeVisible()
})
