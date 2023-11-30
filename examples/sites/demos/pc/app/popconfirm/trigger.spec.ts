import { test, expect } from '@playwright/test'

test('触发方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#trigger')

  const demo = page.locator('#trigger')
  const popConfirm = demo.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')

  await popConfirm.first().hover()
  await expect(popConfirmPopover.first()).toBeVisible()

  await popConfirm.nth(1).hover()
  await expect(popConfirmPopover.nth(1)).not.toBeVisible()
  await popConfirm.nth(1).click()
  await expect(popConfirmPopover.nth(1)).toBeVisible()
})
