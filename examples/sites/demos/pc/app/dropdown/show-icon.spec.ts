import { test, expect } from '@playwright/test'

test('只显示文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#show-icon')

  const wrap = page.locator('#show-icon')
  const dropDown = wrap.locator('.tiny-dropdown').nth(0)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropdownTrigger = dropDown.locator('.tiny-dropdown-trigger')

  await page.waitForTimeout(1500)
  await expect(dropdownTrigger.locator('.tiny-dropdown__title')).toBeVisible()
  await expect(dropdownTrigger.locator('.tiny-dropdown__title')).toHaveText('下拉菜单')
  await expect(dropdownTrigger.locator('.tiny-dropdown__suffix-inner')).toBeHidden()
  await dropdownTrigger.hover()
  await expect(dropDownMenu).toBeVisible()
})

test('自定义图且只显示图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#show-icon')

  const wrap = page.locator('#show-icon')
  const dropDown = wrap.locator('.tiny-dropdown').nth(1)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropdownTrigger = dropDown.locator('.tiny-dropdown-trigger')

  await page.waitForTimeout(1500)
  await expect(dropdownTrigger.locator('.tiny-dropdown__title')).toBeHidden()
  await expect(dropdownTrigger.locator('.tiny-dropdown__suffix-inner')).toBeVisible()
  await dropDown.locator('.tiny-dropdown-trigger').hover()
  await expect(dropDownMenu).toBeVisible()
})
