import { test, expect } from '@playwright/test'

test('[Input]input-icon: prefix-icon, suffix-icon', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#input-icon')
  const prefix = page.locator('.demo-input > .tiny-input-prefix > .tiny-input__prefix')
  await expect(prefix).toBeVisible()
  const suffix = page.locator('.demo-input > .tiny-input > div > .tiny-input__suffix')
  await expect(suffix).toBeVisible()
})
