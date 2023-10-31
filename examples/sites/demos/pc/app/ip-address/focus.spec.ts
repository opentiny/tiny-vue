import { test, expect } from '@playwright/test'

test('ipAddress focus事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#focus')

  const preview = page.locator('#preview')
  const input = preview.getByRole('textbox')
  const modal = page.locator('.tiny-modal').filter({ hasText: 'IpAddress IPv4 focus事件' })

  // 每个输入框获取焦点时触发事件
  await input.nth(0).focus()
  await expect(modal).toHaveCount(1)

  await input.nth(1).focus()
  await expect(modal).toHaveCount(2)

  await input.nth(2).focus()
  await expect(modal).toHaveCount(3)

  await input.nth(3).focus()
  await expect(modal).toHaveCount(4)
})
