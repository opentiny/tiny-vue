import { test, expect } from '@playwright/test'

test('内置事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#events')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')
  const notify = page.locator('.tiny-notify')
  const dropDownMenuItem = page.locator('body > .tiny-dropdown-menu > .tiny-dropdown-item')

  await dropDown.locator('button').first().click()
  await expect(notify.filter({ hasText: '下拉菜单内置按钮点击事件' })).toBeVisible()
  await dropDown.locator('button').nth(1).hover()
  await expect(notify.filter({ hasText: '下拉菜单显隐事件，当前为显示' })).toBeVisible()
  await dropDownMenuItem.filter({ hasText: '狮子头' }).click()
  await expect(notify.filter({ hasText: '下拉菜单显隐事件，当前为隐藏' })).toBeVisible()
  await expect(notify.filter({ hasText: 'itemClick 回调事件' })).toBeVisible()
})
