import { test, expect } from '@playwright/test'

test('斑马线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-grid-stripe/stripe-stripe')
  await expect(page.locator('.tiny-grid__stripe')).toBeVisible()
})
