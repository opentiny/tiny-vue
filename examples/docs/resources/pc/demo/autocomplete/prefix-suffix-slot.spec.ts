import { test, expect } from '@playwright/test'

test('prefix-suffix-slot', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/prefix-suffix-slot')
  const prefix = page.locator('.demo-autocomplete > .tiny-autocomplete > .tiny-input > .tiny-input__prefix')
  const suffix = page.locator('.demo-autocomplete > .tiny-autocomplete > .tiny-input > div > .tiny-input__suffix')
  await expect(prefix).toBeVisible()
  await expect(suffix).toBeVisible()
})
