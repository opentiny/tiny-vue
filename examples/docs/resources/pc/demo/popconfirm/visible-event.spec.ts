import { test, expect } from '@playwright/test'

test('隐藏显示事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/popconfirm/visible-event')

  const preview = page.locator('#preview')
  const popConfirm = preview.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')
  const confirmBtn = popConfirmPopover.getByRole('button', { name: '确定' })
  const modal = page.locator('body > .tiny-modal')

  await popConfirm.hover()
  await expect(popConfirmPopover).toBeVisible()
  await expect(modal.filter({ hasText: 'show事件触发了' })).toBeVisible()
  await confirmBtn.click()
  await expect(popConfirmPopover).not.toBeVisible()
  await expect(modal.filter({ hasText: 'hide事件触发了' })).toBeVisible()
})
