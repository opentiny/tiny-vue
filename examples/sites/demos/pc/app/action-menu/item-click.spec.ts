import { test, expect } from '@playwright/test'

test('菜单项点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#item-click')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')
  const notify = page.locator('.tiny-notify')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')

  await menuItem.filter({ hasText: '开机' }).click()
  await expect(notify.filter({ hasText: '{"label":"开机"}' })).toBeVisible()
  await menuItem.filter({ hasText: '更多' }).hover()
  await page.waitForTimeout(200)
  await dropDownMenu.locator('.tiny-dropdown-item').filter({ hasText: '关机' }).click()
  await expect(notify.filter({ hasText: '{"label":"关机"}' })).toBeVisible()
})
