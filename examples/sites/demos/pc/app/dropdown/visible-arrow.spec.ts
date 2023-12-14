import { test, expect } from '@playwright/test'

test('显示箭头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#visible-arrow')

  const wrap = page.locator('#visible-arrow')
  const dropDown = wrap.locator('.tiny-dropdown')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropdownTrigger = dropDown.locator('.tiny-dropdown-trigger')
  const arrow = dropDownMenu.locator('.popper__arrow')

  await page.waitForTimeout(1500)
  await expect(dropdownTrigger.locator('.tiny-dropdown__title')).toBeVisible()
  await expect(dropdownTrigger.locator('.tiny-dropdown__title')).toHaveText('下拉菜单')
  await expect(dropdownTrigger.locator('.tiny-dropdown__suffix-inner')).toBeVisible()
  await dropdownTrigger.hover()
  await expect(dropDownMenu).toBeVisible()
  await expect(arrow).toBeVisible()
  await expect(arrow).toHaveCSS('top', '-6px')
})
