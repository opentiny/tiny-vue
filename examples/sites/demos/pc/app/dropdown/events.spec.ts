import { test, expect } from '@playwright/test'

test('按钮类型内置事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#events')

  const wrap = page.locator('#events')
  const dropDown = wrap.locator('.tiny-dropdown').nth(0)
  const notify = page.locator('.tiny-notify')
  const dropDownMenuItem = page.locator('body > .tiny-dropdown-menu > .tiny-dropdown-item')

  // 验证 button-click
  await dropDown.locator('button').nth(0).click()
  await expect(notify.filter({ hasText: '下拉菜单内置按钮点击事件' })).toBeVisible()

  // 验证 visible-change
  await page.waitForTimeout(500)
  await dropDown.locator('button').nth(1).hover()
  await expect(notify.filter({ hasText: '下拉菜单显隐事件，当前为显示' })).toBeVisible()
  await page.waitForTimeout(500)
  await dropDown.locator('button').nth(0).hover()
  await expect(notify.filter({ hasText: '下拉菜单显隐事件，当前为隐藏' })).toBeVisible()

  // 验证 item-click
  await page.waitForTimeout(500)
  await dropDown.locator('button').nth(1).hover()
  await dropDownMenuItem.filter({ hasText: '黄金糕' }).click()
  await expect(notify.filter({ hasText: 'itemClick 回调事件' })).toBeVisible()
})

test('配置式内置事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#events')

  const wrap = page.locator('#events')
  const notify = page.locator('.tiny-notify')
  const dropDown = wrap.locator('.tiny-dropdown').nth(1)

  await expect(dropDown).toHaveClass(/options-event/)
  const dropDownMenuItem = page.locator('body > .tiny-dropdown-menu > .tiny-dropdown-item')

  // 验证 visible-change
  await page.waitForTimeout(500)
  await dropDown.hover()
  await expect(notify.filter({ hasText: '下拉菜单显隐事件，当前为显示' })).toBeVisible()

  // 验证 item-click
  await dropDownMenuItem.filter({ hasText: '黄金糕' }).click()
  await expect(notify.filter({ hasText: 'itemClick 回调事件' })).toBeVisible()
  // 验证 visible-change
  await expect(notify.filter({ hasText: '下拉菜单显隐事件，当前为隐藏' })).toBeVisible()
})
