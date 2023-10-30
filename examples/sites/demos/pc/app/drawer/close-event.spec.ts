import { test, expect } from '@playwright/test'

test('关闭事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#close-event')

  const message = page.locator('.tiny-modal.type__message').filter({ hasText: '关闭事件' }).first()

  // 右上角关闭按钮
  await page.getByRole('button', { name: '关闭事件示例' }).click()
  await page.getByRole('button', { name: 'Close' }).click()
  await expect(message).toBeVisible()

  // 底部按钮关闭
  await page.getByRole('button', { name: '关闭事件示例' }).click()
  await page.getByRole('button', { name: '取消' }).click()
  await expect(message).toBeVisible()
})
