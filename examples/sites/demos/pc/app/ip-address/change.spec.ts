import { test, expect } from '@playwright/test'

test('ipAddress change事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#change')

  const preview = page.locator('#preview')
  const input = preview.getByRole('textbox')
  const modal = page.locator('.tiny-modal').filter({ hasText: 'IpAddress IPv4 change事件' })

  // 每个输入框入内容改变并失焦时触发事件
  await input.nth(0).fill('111')
  await input.nth(0).blur()
  await expect(modal).toHaveCount(1)

  await input.nth(1).fill('222')
  await input.nth(1).blur()
  await expect(modal).toHaveCount(2)

  await input.nth(2).fill('33')
  await input.nth(2).blur()
  await expect(modal).toHaveCount(3)

  await input.nth(3).fill('33')
  await input.nth(3).blur()
  await expect(modal).toHaveCount(4)
})
