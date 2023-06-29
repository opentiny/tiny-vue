import { test, expect } from '@playwright/test'

test('图标类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/popconfirm/type')

  const preview = page.locator('#preview')
  const popConfirm = preview.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')
  const getIcon = parent => parent.locator('svg.tiny-svg path').first()

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
