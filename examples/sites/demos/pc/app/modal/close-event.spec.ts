import { test, expect } from '@playwright/test'

test('关闭按钮事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#close-event')

  const modal = page.locator('.tiny-modal').filter({ hasText: 'test' })
  await page.getByRole('button', { name: '点击关闭按钮时触发事件' }).click()
  await page.locator('.tiny-modal__close-btn').click()
  await expect(modal).not.toBeVisible()
  await expect(page.locator('.tiny-modal.type__message')).toHaveText('点击关闭按钮时触发事件')
})
