import { test, expect } from '@playwright/test'

test('下拉按钮显示文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#more-text')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')

  await expect(menuItem.last().locator('.tiny-dropdown__title')).toHaveText('自定义下拉文本')
})
