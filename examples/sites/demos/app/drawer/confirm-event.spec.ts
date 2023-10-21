import { test, expect } from '@playwright/test'

test('确定事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/drawer/confirm-event')

  const message = page.locator('.tiny-modal.type__message').filter({ hasText: '确定事件' }).first()
  await page.getByRole('button', { name: '确定事件示例' }).click()
  await page.getByRole('button', { name: '确定' }).nth(1).click()
  await expect(message).toBeVisible()
})
