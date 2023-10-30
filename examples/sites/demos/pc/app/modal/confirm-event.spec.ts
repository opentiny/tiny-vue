import { test, expect } from '@playwright/test'

test('确认按钮事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#confirm-event')

  const modal = page.locator('.tiny-modal').filter({ hasText: 'test' })
  await page.getByRole('button', { name: '点击确定按钮触发事件' }).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(modal).not.toBeVisible()
  await expect(page.locator('.tiny-modal.type__message')).toHaveText('点击确定按钮时触发事件')
})
