import { test, expect } from '@playwright/test'

test('自定义底部按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#slot-footer')

  const demo = page.locator('#slot-footer')
  const popConfirm = demo.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')
  const closeBtn = popConfirmPopover.getByRole('button', { name: '自定义关闭按钮' })

  await popConfirm.hover()
  await expect(popConfirmPopover).toBeVisible()
  await expect(closeBtn).toBeVisible()
  await closeBtn.click()
  await expect(popConfirmPopover).not.toBeVisible()
})
