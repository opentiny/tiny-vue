import { test, expect } from '@playwright/test'

test('remote-search', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/remote-search')
  await expect(
    page.locator('.demo-autocomplete > .tiny-autocomplete > .tiny-input > .tiny-input-display-only > input')
  ).toHaveAttribute('fetchsuggestions', 'function () { [native code] }')
})
