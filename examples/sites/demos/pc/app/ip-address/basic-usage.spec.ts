import { test, expect } from '@playwright/test'

test('ipAddress 类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#basic-usage')

  const preview = page.locator('#preview')
  const ipv4 = preview.locator('.tiny-ip-address').nth(0)
  const ipv6 = preview.locator('.tiny-ip-address').nth(1)

  await expect(ipv4.getByRole('textbox')).toHaveCount(4)
  await expect(ipv6.getByRole('textbox')).toHaveCount(8)
})
