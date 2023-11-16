import { test, expect } from '@playwright/test'

test('ipAddress input事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#input')

  const preview = page.locator('#preview')
  const input = preview.getByRole('textbox')
  const modal = page.locator('.tiny-modal').filter({ hasText: 'IpAddress IPv4 input事件' })

  // 每个输入框输入时触发事件
  await input.nth(0).fill('111')
  await expect(modal).toHaveCount(1)

  await input.nth(1).fill('222')
  await expect(modal).toHaveCount(2)

  await input.nth(2).fill('33')
  await expect(modal).toHaveCount(3)

  await input.nth(3).fill('33')
  await expect(modal).toHaveCount(4)
})
