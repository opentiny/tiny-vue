import { test, expect } from '@playwright/test'

test('ipAddress 输入框大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#size')

  const preview = page.locator('#preview')
  const ipAddress = preview.locator('.tiny-ip-address__input')

  await expect(ipAddress).not.toHaveCSS('height', '28px')
  await expect(ipAddress).toHaveCSS('height', '42px')
})
