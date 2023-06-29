import { test, expect } from '@playwright/test'

test('basic-usage', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/basic-usage')
  const autocomplete = page.locator('.demo-autocomplete > .tiny-autocomplete')
  await expect(autocomplete).toBeVisible()
})
