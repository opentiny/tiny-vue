import { test, expect } from '@playwright/test'

test('确认事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#confirm-event')

  const message = page.locator('.tiny-modal.type__message').filter({ hasText: '确认事件' }).first()
  await page.getByRole('button', { name: '确认事件示例' }).click()
  await page.getByRole('button', { name: '确认' }).nth(1).click()
  await expect(message).toBeVisible()
})
