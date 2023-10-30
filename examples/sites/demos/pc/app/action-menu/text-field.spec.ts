import { test, expect } from '@playwright/test'

test('自定义显示文本text-field', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#text-field')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')

  await expect(menuItem.first()).toHaveText('远程登陆')
  await expect(menuItem.nth(1)).toHaveText('开机')
})
