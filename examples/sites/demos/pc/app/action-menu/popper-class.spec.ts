import { test, expect } from '@playwright/test'

test('弹框样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#popper-class')

  const wrap = page.locator('#popper-class')
  const actionMenu = wrap.locator('.tiny-action-menu')
  const visibleItem = actionMenu.locator('.tiny-action-menu__item')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')

  await page.waitForTimeout(1300)
  await visibleItem.last().hover()
  await page.waitForTimeout(200)
  await expect(dropDownMenu).toHaveClass(/custom-action-menu/)
  await expect(dropDownMenu).toHaveCSS('background-color', 'rgb(250, 235, 215)')
})
