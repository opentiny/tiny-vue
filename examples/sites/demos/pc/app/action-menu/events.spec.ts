import { test, expect } from '@playwright/test'

test('菜单项点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#events')

  const wrap = page.locator('#events')
  const actionMenu = wrap.locator('.tiny-action-menu')
  const visibleItem = actionMenu.locator('.tiny-action-menu__item')
  const notify = page.locator('.tiny-notify')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await visibleItem.nth(1).click()
  await expect(notify.filter({ hasText: '{"label":"开机"}' })).toBeVisible()
  await page.waitForTimeout(200)
  await visibleItem.filter({ hasText: '更多' }).click()
  await expect(dropDownMenu).toBeVisible()
  // more-click 更多按钮点击事件
  await expect(notify.filter({ hasText: '触发 moreClick 事件' })).toBeVisible()
  // visible-change 下拉面板显示隐藏事件
  await expect(notify.filter({ hasText: '触发 visible-change 事件,下拉状态为 true' })).toBeVisible()
  // item-click 菜单项点击事件
  await dropDownMenuItem.filter({ hasText: '关机' }).click()
  await expect(notify.filter({ hasText: '{"label":"关机"}' })).toBeVisible()
  // visible-change 下拉面板显示隐藏事件
  await expect(notify.filter({ hasText: '触发 visible-change 事件,下拉状态为 false' })).toBeVisible()
  await expect(dropDownMenu).not.toBeVisible()
})
