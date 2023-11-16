import { test, expect } from '@playwright/test'

test('使用配置式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#options')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')
  const menuOptionDropDown = dropDown.first()
  const titleOptionDropDown = dropDown.nth(2)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = page.locator('body > .tiny-dropdown-menu > .tiny-dropdown-item')

  await expect(titleOptionDropDown).toContainText('点击下拉')
  await menuOptionDropDown.hover()
  await expect(dropDownMenu.first()).toBeVisible()
  await expect(dropDownMenuItem.first()).toContainText('老友粉')
  await expect(dropDownMenuItem.first()).toHaveClass(/is-disabled/)
  await expect(dropDownMenuItem.nth(2)).toContainText('黄金糕')
  // 检测配置的图标是否出现
  await expect(dropDownMenuItem.nth(2).locator('svg > path')).toHaveAttribute('d', /^M12 2\.8c\.1 0.+2-\.6-\.3-1-\.3z$/)
})
