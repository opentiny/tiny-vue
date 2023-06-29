import { test, expect } from '@playwright/test'

test('value-key', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/value-key')
  await expect(
    page.locator('.demo-autocomplete > .tiny-autocomplete > .tiny-input > .tiny-input-display-only > input')
  ).toHaveAttribute('valuekey', 'name')
})
