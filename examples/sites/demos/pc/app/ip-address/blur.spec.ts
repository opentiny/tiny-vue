import { test, expect } from '@playwright/test'

test('ipAddress blur事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('ip-address#blur')

  const preview = page.locator('#preview')
  const input = preview.getByRole('textbox')
  const modal = page.locator('.tiny-modal').filter({ hasText: 'IpAddress IPv4 blur事件' })

  // 每个输入框失去焦点时触发事件
  await input.nth(0).click()
  await input.nth(0).blur()
  await expect(modal).toHaveCount(1)

  await input.nth(1).click()
  await input.nth(1).blur()
  await expect(modal).toHaveCount(2)

  await input.nth(2).click()
  await input.nth(2).blur()
  await expect(modal).toHaveCount(3)

  await input.nth(3).click()
  await input.nth(3).blur()
  await expect(modal).toHaveCount(4)
})
