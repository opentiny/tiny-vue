import { test, expect } from '@playwright/test'

test('custom-icon', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/custom-icon')
  await page.getByText('自定义图标').first().click()
  const prefix = page.locator('.tiny-autocomplete > .tiny-input > .tiny-input__prefix')
  const suffix = page.locator('.tiny-autocomplete > .tiny-input > div > .tiny-input__suffix')
  await expect(prefix).toBeVisible()
  await expect(suffix).toBeVisible()
})
