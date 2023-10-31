import { test, expect } from '@playwright/test'

test('下拉面板显示事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#visible-change')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')
  const notify = page.locator('.tiny-notify')

  await menuItem.last().hover()
  await expect(dropDownMenu).toBeVisible()
  await expect(notify.filter({ hasText: '触发 visible-change 事件,下拉状态为 true' })).toBeVisible()
  await menuItem.first().click()
  await expect(dropDownMenu).not.toBeVisible()
  await expect(notify.filter({ hasText: '触发 visible-change 事件,下拉状态为 false' })).toBeVisible()
})
