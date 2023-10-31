import { test, expect } from '@playwright/test'

test('placement', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#placement')
  await expect(
    page.locator('.demo-autocomplete > .tiny-autocomplete > .tiny-input > .tiny-input-display-only > input')
  ).toHaveAttribute('placement', 'top-end')
})
