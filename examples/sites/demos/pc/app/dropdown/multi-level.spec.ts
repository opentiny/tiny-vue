import { test, expect } from '@playwright/test'

test('多级菜单,使用 menu-options', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#multi-level')

  const wrap = page.locator('#multi-level')
  const dropDown = wrap.locator('.tiny-dropdown').first()
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')
  const notify = page.locator('.tiny-notify')

  await page.waitForTimeout(1500)
  await dropDown.hover()
  await expect(dropDownMenu).toBeVisible()
  await dropDownMenuItem.first().hover()
  await dropDownMenuItem.getByText('老友粉2.1').hover()
  await dropDownMenuItem.getByText('狮子头3.1').click()
  await expect(
    notify.filter({
      hasText: '配置式可以通过 data.itemData 获取配置数据：{"label":"狮子头3.1"}'
    })
  ).toBeVisible()
})

test('多级菜单,使用 options', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#multi-level')

  const wrap = page.locator('#multi-level')
  const dropDown = wrap.locator('.tiny-dropdown').nth(1)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')
  const notify = page.locator('.tiny-notify')

  await page.waitForTimeout(1500)
  await dropDown.hover()
  await expect(dropDownMenu).toBeVisible()
  await dropDownMenuItem.first().hover()
  await dropDownMenuItem.getByText('老友粉2.1').hover()
  await dropDownMenuItem.getByText('狮子头3.1').click()
  await expect(
    notify.filter({
      hasText: '配置式可以通过 data.itemData 获取配置数据：{"label":"狮子头3.1"}'
    })
  ).toBeVisible()
})
