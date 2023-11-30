import { test, expect, Locator } from '@playwright/test'

test('图标类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#type')

  const demo = page.locator('#type')
  const popConfirm = demo.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')
  const getIcon = (parent: Locator) => parent.locator('svg.tiny-svg path').first()

  await popConfirm.first().click()
  await expect(popConfirmPopover.first()).toBeVisible()
  await expect(getIcon(popConfirmPopover.first())).toBeVisible()
  await popConfirm.nth(1).click()
  await expect(popConfirmPopover.nth(1)).toBeVisible()
  await expect(getIcon(popConfirmPopover.nth(1))).toBeVisible()
  await popConfirm.nth(2).click()
  await expect(popConfirmPopover.nth(2)).toBeVisible()
  await expect(getIcon(popConfirmPopover.nth(2))).toBeVisible()
  await popConfirm.nth(3).click()
  await expect(popConfirmPopover.nth(3)).toBeVisible()
  await expect(getIcon(popConfirmPopover.nth(3))).toBeVisible()
})
