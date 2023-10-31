import { test, expect } from '@playwright/test'

test('ipAddress select事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#select')

  const preview = await page.locator('#preview')
  const modal = page.locator('.tiny-modal').filter({ hasText: 'IpAddress IPv4 select事件' })
  const input = preview.getByRole('textbox')

  await input.nth(0).selectText()
  await expect(modal).toHaveCount(1)

  await input.nth(1).selectText()
  await expect(modal).toHaveCount(2)

  await input.nth(2).selectText()
  await expect(modal).toHaveCount(3)

  await input.nth(3).selectText()
  await expect(modal).toHaveCount(4)
})
