import { test, expect } from '@playwright/test'

test('[Input]rows: rows, cols', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#rows')
  const textarea = page.locator('.demo-input > .tiny-textarea > .tiny-textarea-display-only > textarea')
  await expect(textarea.nth(1)).toHaveAttribute('rows', '1')

  const textarea2 = page.locator('.demo-input > .tiny-textarea > .tiny-textarea-display-only > textarea')
  await expect(textarea2.nth(2)).toHaveAttribute('cols', '100')
})
