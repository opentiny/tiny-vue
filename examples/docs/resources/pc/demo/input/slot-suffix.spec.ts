import { test, expect } from '@playwright/test'

test('尾部内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/slot-suffix')
  const suffix = page.locator('.tiny-input__suffix-inner')
  await expect(suffix).toBeVisible()
})
