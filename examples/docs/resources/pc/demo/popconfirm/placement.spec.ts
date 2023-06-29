import { test, expect } from '@playwright/test'

test('提示框显示位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/popconfirm/placement')

  const preview = page.locator('#preview')
  const popConfirm = preview.locator('.tiny-popconfirm')
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')

  await popConfirm.first().hover()
  await expect(popConfirmPopover.first()).toBeVisible()
  const popConfirmBox1 = await popConfirm.first().boundingBox()
  const popoverBox1 = await popConfirmPopover.first().boundingBox()
  expect(popConfirmBox1?.y).toBeLessThan(popoverBox1?.y || 0)

  await popConfirm.nth(1).hover()
  await expect(popConfirmPopover.nth(1)).toBeVisible()
  const popConfirmBox2 = await popConfirm.nth(1).boundingBox()
  const popoverBox2 = await popConfirmPopover.nth(1).boundingBox()
  expect(popConfirmBox2?.x).toBeLessThan(popoverBox2?.x || 0)
})
