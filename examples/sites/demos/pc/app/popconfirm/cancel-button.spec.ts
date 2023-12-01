import { test, expect } from '@playwright/test'

test('隐藏取消按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#cancel-button')

  const demo = page.locator('#cancel-button')
  const popConfirm = demo.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')
  const cancelBtn = popConfirmPopover.getByRole('button', { name: '取消' })

  await popConfirm.hover()
  await expect(popConfirmPopover).toBeVisible()
  await expect(cancelBtn).not.toBeVisible()
})
