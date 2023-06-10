import { test, expect } from '@playwright/test'

test('头部内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/slot-prefix')
  const prefix = page.locator('.tiny-input__prefix')
  await expect(prefix).toBeVisible()
})
