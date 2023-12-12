import { test, expect } from '@playwright/test'

test('unit', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#unit')
  const unit = page.locator('.tiny-numeric__unit')
  await expect(unit).toHaveText('kg')
})
