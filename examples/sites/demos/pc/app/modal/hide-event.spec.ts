import { test, expect } from '@playwright/test'

test('窗口关闭事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#hide-event')

  const modal = page.locator('.tiny-modal').filter({ hasText: 'test' })
  await page.getByRole('button', { name: '在窗口关闭时会触发事件' }).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(modal).not.toBeVisible()
  await page.getByRole('button', { name: '在窗口关闭时会触发事件' }).click()
  await page.getByRole('button', { name: '取消' }).click()
  await expect(modal).not.toBeVisible()
  await page.getByRole('button', { name: '在窗口关闭时会触发事件' }).click()
  await page.locator('.tiny-modal__close-btn').click()
  await expect(modal).not.toBeVisible()
})
