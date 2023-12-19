import { test, expect } from '@playwright/test'

test('关闭消息弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#message-closable')

  const demo = page.locator('#message-closable')
  const modal = page.locator('.tiny-modal.active')

  await demo.getByRole('button', { name: '关闭按钮示例' }).click()
  await expect(modal.locator('.tiny-modal__close-btn')).toBeVisible()
  await modal.locator('.tiny-modal__close-btn').click()
  await expect(modal).not.toBeVisible()
})
