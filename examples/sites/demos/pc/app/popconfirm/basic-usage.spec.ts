import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#basic-usage')

  const preview = page.locator('#preview')
  const popConfirm = preview.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')
  const confirmBtn = popConfirmPopover.getByRole('button', { name: '确定' })

  await popConfirm.hover()
  await expect(popConfirmPopover).toBeVisible()
  await confirmBtn.click()
  await expect(popConfirmPopover).not.toBeVisible()
})
