import { test, expect } from '@playwright/test'

test('头像消息计数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#message-count-total')
  const messageBox = page.locator('.tiny-user-head__message')
  await expect(messageBox).toHaveText('100')
})
