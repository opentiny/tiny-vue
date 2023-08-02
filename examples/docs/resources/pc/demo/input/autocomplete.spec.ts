import { test, expect } from '@playwright/test'

test('自动补全', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/autocomplete')
  const input = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await expect(input).toHaveAttribute('autocomplete', 'on')
})
