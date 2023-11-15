import { test, expect } from '@playwright/test'

test('边框基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('grid-appearance-settings#appearance-settings-grid-border')
  await expect(page.locator('.tiny-grid__border')).toBeVisible()
})
