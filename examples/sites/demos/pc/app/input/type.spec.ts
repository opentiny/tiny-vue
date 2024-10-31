import { test, expect } from '@playwright/test'

test('[Input]type', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#type')
  const input = page.locator('.demo-input > .tiny-input >  .tiny-input-display-only > input')
  await expect(input.nth(0)).toHaveAttribute('type', 'text')
  await expect(input.nth(1)).toHaveAttribute('type', 'password')
  await expect(input.nth(2)).toHaveAttribute('type', 'number')
})
