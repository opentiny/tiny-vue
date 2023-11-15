import { test, expect } from '@playwright/test'

test('disabled', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#disabled')
  await expect(page.locator('//div[@class="tiny-input is-disabled"]')).toHaveClass(/disabled/)
})
