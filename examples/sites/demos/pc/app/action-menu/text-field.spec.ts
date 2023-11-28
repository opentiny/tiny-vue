import { test, expect } from '@playwright/test'

test('映射字段', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#text-field')

  const wrap = page.locator('#text-field')
  const actionMenu = wrap.locator('.tiny-action-menu')
  const visibleItem = actionMenu.locator('.tiny-action-menu__item')

  await expect(visibleItem.first()).toHaveText('远程登陆')
  await expect(visibleItem.nth(1)).toHaveText('开机')
})
