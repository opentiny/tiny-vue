import { test, expect } from '@playwright/test'

test('多级菜单,使用 menu-options', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#multi-level')

  const wrap = page.locator('#multi-level')
  const dropDown = wrap.locator('.tiny-dropdown').nth(0)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await page.waitForTimeout(2000)
  await dropDown.hover()
  await expect(dropDownMenu).toBeVisible()
  await page.waitForTimeout(500)
  await dropDownMenuItem.first().hover()
  await page.waitForTimeout(500)
  await dropDownMenuItem.getByText('老友粉2.1').hover()
  await expect(dropDownMenuItem.getByText('狮子头3.1')).toBeVisible()
  await dropDownMenuItem.getByText('狮子头3.1').click()
  await page.waitForTimeout(1000)

  await expect(
    page.locator('.tiny-modal').filter({
      hasText: '配置式可以通过 data.itemData 获取配置数据：{"label":"狮子头3.1"}'
    })
  ).toHaveCount(1)
  await page.waitForTimeout(500)
})

test('多级菜单,使用 options', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#multi-level')

  const wrap = page.locator('#multi-level')
  const dropDown = wrap.locator('.tiny-dropdown').nth(1)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await page.waitForTimeout(2000)
  await dropDown.hover()
  await expect(dropDownMenu).toBeVisible()
  await page.waitForTimeout(500)
  await dropDownMenuItem.first().hover()
  await page.waitForTimeout(500)
  await dropDownMenuItem.getByText('老友粉2.1').hover()
  await dropDownMenuItem.getByText('狮子头3.1').click()
  await page.waitForTimeout(1000)
  await expect(
    page.locator('.tiny-modal').filter({
      hasText: '配置式可以通过 data.itemData 获取配置数据：{"label":"狮子头3.1"}'
    })
  ).toHaveCount(1)
})
