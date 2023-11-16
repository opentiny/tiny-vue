import { test, expect } from '@playwright/test'

test('菜单隐藏方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#hide-on-click')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = page.locator('body > .tiny-dropdown-menu > .tiny-dropdown-item')

  await dropDown.hover()
  await expect(dropDownMenu).toBeVisible()
  // 点击菜单项后菜单不消失
  await dropDownMenuItem.first().click()
  await expect(dropDownMenu).toBeVisible()
})
