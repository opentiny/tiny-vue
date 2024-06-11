import { test, expect } from '@playwright/test'

test('打开事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#open-event')

  const message = page.locator('.tiny-modal.type__message').filter({ hasText: '打开事件' }).first()

  await page.getByRole('button', { name: '打开事件示例' }).click()
  await expect(message).toBeVisible()
})
