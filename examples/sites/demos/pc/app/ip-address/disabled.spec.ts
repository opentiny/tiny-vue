import { test, expect } from '@playwright/test'

test('ipAddress 禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#disabled')

  const demo = page.locator('#disabled')
  const ipAddress = demo.locator('.tiny-ip-address__input')
  const input = demo.getByRole('textbox')

  await expect(ipAddress).toHaveClass(/disabled/)
  await expect(input.nth(0)).toBeDisabled()
  await expect(input.nth(1)).toBeDisabled()
  await expect(input.nth(2)).toBeDisabled()
  await expect(input.nth(3)).toBeDisabled()
  await expect(ipAddress).toHaveCSS('background-color', 'rgb(240, 240, 240)')
  await expect(ipAddress).toHaveCSS('border-bottom-color', 'rgb(219, 219, 219)')
  await expect(ipAddress).toHaveCSS('color', 'rgb(194, 194, 194)')
})
