import { test, expect } from '@playwright/test'

test('消息的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#message-event')
  const content = page.locator('.is-message')
  await page.getByRole('button', { name: '打开带事件消息' }).first().click()
  await expect(content.first()).toHaveText(/自定义消息的内容/)
  await expect(content.nth(1)).toHaveText(/show 事件触发了/)
})
