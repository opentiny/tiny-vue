import { test, expect } from '@playwright/test'

test('消息的关闭和延时', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('message#message-close')
  await page.getByRole('button', { name: '显示关闭按钮' }).click()
  const info = page.locator('div').filter({ hasText: /是否显示关闭按钮/ })
  await expect(info.nth(1)).toHaveText(/是否显示关闭按钮/)
})
