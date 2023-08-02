import { test, expect } from '@playwright/test'

test('popper-class', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/popper-class')
  await expect(
    page.locator('.autocomplete-demo > .tiny-autocomplete > .tiny-input > .tiny-input-display-only > input')
  ).toHaveAttribute('popperclass', 'my-autocomplete')
})
