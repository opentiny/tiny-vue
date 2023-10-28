import { test, expect } from '@playwright/test'

test('[Input]:native', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#native')
  const input = await page.locator('.demo-input .tiny-input > .tiny-input-display-only > input')
  await expect(input.nth(0)).toHaveAttribute('disabled', '')
  await expect(input.nth(1)).toHaveAttribute('readonly', '')
  await expect(input.nth(2)).toHaveAttribute('step', '2')
  await expect(input.nth(3)).toHaveAttribute('max', '11')
  await expect(input.nth(3)).toHaveAttribute('min', '2')
  await expect(input.nth(4)).toHaveAttribute('maxlength', '5')
  await expect(input.nth(5)).toHaveAttribute('autocomplete', 'on')
})
