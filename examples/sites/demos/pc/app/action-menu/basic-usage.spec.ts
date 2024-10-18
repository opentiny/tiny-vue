import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#basic-usage')

  const wrap = page.locator('#basic-usage')
  const actionMenu = wrap.locator('.tiny-action-menu')
  const visibleItem = actionMenu.locator('.tiny-action-menu__item')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')
  const childMenu = dropDownMenuItem.locator('.tiny-dropdown-item--child')
  const moreItem = visibleItem.last()

  await expect(visibleItem).toHaveCount(3)
  // 更多按钮
  await expect(moreItem).toHaveText(/更多/)
  // 图标显示
  await expect(moreItem.locator('svg > path').nth(0)).toHaveAttribute(
    'd',
    'M8 11.43c-.15 0-.31-.06-.42-.18L1.92 5.6c-.23-.23-.23-.61 0-.85s.61-.23.85 0L8 9.98l5.23-5.23a.61.61 0 0 1 .85 0c.23.23.23.61 0 .85l-5.66 5.66c-.11.11-.27.17-.42.17z'
  )
  // 分割线
  await expect(actionMenu.locator('.tiny-action-menu__item-line')).toHaveCount(2)
  // 图标旋转
  await page.waitForTimeout(300)
  await moreItem.hover()
  await expect(dropDownMenu).toBeVisible()
  // 箭头是否变成向上
  await page.waitForTimeout(300)
  await expect(moreItem.locator('.tiny-dropdown--visible')).toHaveCSS('transform', 'matrix(1, 0, 0, -1, 0, 0)')
  // 子节点展开
  await dropDownMenu.locator('.tiny-dropdown-item').filter({ hasText: '网络设置' }).hover()
  await expect(childMenu).toBeVisible()
})
