import { test, expect } from '@playwright/test'

test('消息计数上限', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#message-count-limit')
  const messageBox = page.locator('.tiny-user-head__message')
  await expect(messageBox).toHaveText('99+')
})
