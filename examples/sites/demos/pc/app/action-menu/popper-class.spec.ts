import { test, expect } from '@playwright/test'

test('自定义下拉面板样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#popper-class')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')

  await menuItem.last().hover()
  await expect(dropDownMenu).toHaveClass(/custom-action-menu/)
})
