import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#dynamic-disabled')

  const numeric = page.locator('#preview .tiny-numeric')
  const numericInput = numeric.locator('.tiny-numeric__input-inner')
  await expect(numeric).toHaveClass(/is-disabled/)
  await expect(numericInput).toBeDisabled()
})
