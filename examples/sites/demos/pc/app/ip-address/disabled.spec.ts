import { test, expect } from '@playwright/test'

test('ipAddress 禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#disabled')

  const preview = page.locator('#preview')
  const ipAddress = preview.locator('.tiny-ip-address__input')
  const input = preview.getByRole('textbox')

  await expect(ipAddress).toHaveClass(/disabled/)
  await expect(input.nth(0)).toBeDisabled()
  await expect(input.nth(1)).toBeDisabled()
  await expect(input.nth(2)).toBeDisabled()
  await expect(input.nth(3)).toBeDisabled()
})
