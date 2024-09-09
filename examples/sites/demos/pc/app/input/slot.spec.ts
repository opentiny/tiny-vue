import { test, expect } from '@playwright/test'

test('[Input]slot', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#slot')

  const demo = page.locator('#slot')

  const prefix = demo.locator('.tiny-input__prefix')
  await expect(prefix).toBeVisible()

  const append = demo.locator('.tiny-input-group__append')
  await expect(append).toBeVisible()

  const prepend = demo.locator('.tiny-input-group__prepend')
  await expect(prepend).toBeVisible()

  const suffix = demo.locator('.tiny-input__suffix-inner')
  await expect(suffix).toBeVisible()
})
