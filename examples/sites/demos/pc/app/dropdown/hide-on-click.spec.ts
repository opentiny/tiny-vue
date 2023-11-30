import { test, expect } from '@playwright/test'

test('点击后不收起', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#hide-on-click')

  const wrap = page.locator('#hide-on-click')
  const dropDown = wrap.locator('.tiny-dropdown')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await page.waitForTimeout(1300)
  await dropDown.hover()
  await expect(dropDownMenu).toBeVisible()
  // 点击菜单项后菜单不消失
  await dropDownMenuItem.first().click()
  await expect(dropDownMenu).toBeVisible()
})
