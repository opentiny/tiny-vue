import { test, expect } from '@playwright/test'

test('斑马线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-appearance-settings#appearance-settings-stripe')
  await expect(page.locator('.tiny-grid__stripe')).toBeVisible()
})
