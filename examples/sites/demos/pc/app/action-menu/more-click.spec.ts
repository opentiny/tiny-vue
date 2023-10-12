import { test, expect } from '@playwright/test'

test('更多按钮点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/action-menu/more-click')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')
  const notify = page.locator('.tiny-notify')

  await menuItem.filter({ hasText: '开机' }).click()
  await expect(notify).not.toBeVisible()
  await menuItem.filter({ hasText: '更多' }).click()
  await expect(notify.filter({ hasText: '触发 moreClick 事件' })).toBeVisible()
})
