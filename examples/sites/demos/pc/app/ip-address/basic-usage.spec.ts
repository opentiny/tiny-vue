import { test, expect } from '@playwright/test'

test('ipAddress 类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#basic-usage')

  const demo = page.locator('#basic-usage')
  const ipv4 = demo.locator('.tiny-ip-address').nth(0)
  const ipv6 = demo.locator('.tiny-ip-address').nth(1)

  await expect(ipv4.getByRole('textbox')).toHaveCount(4)
  await expect(ipv6.getByRole('textbox')).toHaveCount(8)
  await ipv4.locator('input').first().fill('111')
  await expect(ipv4.locator('input').first()).toHaveValue('111')
  await expect(ipv4.locator('input').nth(1)).toHaveValue('168')
  await expect(ipv4.locator('input').nth(2)).toHaveValue('0')
  await expect(ipv4.locator('input').nth(3)).toHaveValue('1')
})
