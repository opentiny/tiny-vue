import { test, expect } from '@playwright/test'

test('自定义类名', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#custom-class')

  const demo = page.locator('#custom-class')
  const popConfirm = demo.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')
  const confirmBtn = popConfirmPopover.getByRole('button', { name: '确定' })

  await popConfirm.hover()
  await expect(popConfirmPopover).toBeVisible()
  await expect(popConfirmPopover).toHaveClass(/custom-class/)
  await confirmBtn.click()
  await expect(popConfirmPopover).not.toBeVisible()
})
