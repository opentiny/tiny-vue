import { test, expect } from '@playwright/test'

test('ipAddress 输入框大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#size')

  const demo = page.locator('#size')
  const ipAddress = demo.locator('.tiny-ip-address__input')

  await expect(ipAddress.first()).toHaveCSS('height', '42px')
  await expect(ipAddress.nth(1)).toHaveCSS('height', '32px')
  await expect(ipAddress.nth(2)).toHaveCSS('height', '28px')
  await expect(ipAddress.nth(3)).toHaveCSS('height', '24px')
})
