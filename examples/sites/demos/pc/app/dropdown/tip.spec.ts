import { test, expect } from '@playwright/test'

test('配置式设置提示信息', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#tip')

  const wrap = page.locator('#tip')
  const dropDown = wrap.locator('.tiny-dropdown').nth(0)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropdownTrigger = dropDown.locator('.tiny-dropdown-trigger')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await page.waitForTimeout(1500)
  await expect(dropdownTrigger.locator('.tiny-dropdown__title')).toBeVisible()
  await expect(dropdownTrigger.locator('.tiny-dropdown__title')).toHaveText('下拉菜单')
  await expect(dropdownTrigger.locator('.tiny-dropdown__suffix-inner')).toBeVisible()
  await dropdownTrigger.hover()
  await expect(dropDownMenu).toBeVisible()

  await dropDownMenuItem.nth(1).hover()
  await expect(page.locator('.tiny-tooltip').filter({ hasText: /^很好$/ })).toHaveCount(1)

  await dropDownMenuItem.nth(2).hover()
  await expect(page.locator('.tiny-tooltip').filter({ hasText: /^支持函数$/ })).toHaveCount(1)
})

test('使用 tip 和 tip-position 属性设置提示信息', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#tip')

  const wrap = page.locator('#tip')
  const dropDown = wrap.locator('.tiny-dropdown').nth(1)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropdownTrigger = dropDown.locator('.tiny-dropdown-trigger')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await page.waitForTimeout(1500)
  await expect(dropdownTrigger.locator('.tiny-dropdown__title')).toBeVisible()
  await expect(dropdownTrigger.locator('.tiny-dropdown__title')).toHaveText('下拉菜单')
  await expect(dropdownTrigger.locator('.tiny-dropdown__suffix-inner')).toBeVisible()
  await dropdownTrigger.hover()
  await expect(dropDownMenu).toBeVisible()

  await dropDownMenuItem.nth(0).hover()
  await expect(page.locator('body > .tiny-tooltip').filter({ hasText: /^老友粉$/ })).toHaveCount(1)

  await dropDownMenuItem.nth(1).hover()
  await expect(page.locator('body > .tiny-tooltip').filter({ hasText: /^黄金糕$/ })).toHaveCount(1)
})
