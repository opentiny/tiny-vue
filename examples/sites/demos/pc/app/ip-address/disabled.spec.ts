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
  await expect(ipAddress).toHaveCSS('background-color', 'rgb(245, 245, 246)')
  await expect(ipAddress).toHaveCSS('border-bottom-color', 'rgb(223, 225, 230)')
  await expect(ipAddress).toHaveCSS('color', 'rgb(173, 176, 184)')
})
