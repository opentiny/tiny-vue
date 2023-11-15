import { test, expect } from '@playwright/test'

test('自定义菜单弹窗底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link-menu#custom-foot')
  const preview = page.locator('#preview')
  const dialogBox = preview.locator('.tiny-dialog-box')
  const linkMenuList = preview.locator('.tiny-tree.tiny-link-menu__overflow > div')
  // 点击图标，弹出弹框
  await preview.getByRole('button').click()
  const slotButtons = preview.locator('.tiny-dialog-box__wrapper .tiny-link-menu__dialog-btn button')
  const firstButton = slotButtons.first()
  await expect(firstButton).toHaveText('选择')
  const firstOption = linkMenuList.first().locator('label.tiny-checkbox')
  // 点击第一个选项
  await firstOption.click()
  // 确认选择
  await firstButton.click()
  await expect(dialogBox).toBeHidden()
  // 页面上应该展示所选的1个菜单项
  await expect(preview.locator('.tiny-link-menu .tiny-link-menu__nav > a')).toHaveCount(1)
})
