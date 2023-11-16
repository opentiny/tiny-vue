import { test, expect } from '@playwright/test'

test('取消事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#cancel-event')

  const modal = page.locator('.tiny-modal').filter({ hasText: 'test' })
  await page.getByRole('button', { name: '点击取消按钮时触发事件' }).click()
  await page.getByRole('button', { name: '取消', exact: true }).click()
  await expect(modal).not.toBeVisible()
  await expect(page.locator('.tiny-modal.type__message')).toHaveText('点击取消按钮时触发事件')
})
