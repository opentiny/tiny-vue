import { test, expect } from '@playwright/test'

test('默认', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#inherit-width')

  const wrap = page.locator('#inherit-width')
  const dropDown = wrap.locator('.tiny-dropdown').nth(0)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await page.waitForTimeout(1500)
  await dropDown.locator('.tiny-dropdown-trigger').hover()
  await expect(dropDownMenu).toBeVisible()
  // 弹框宽度不设置最小宽度

  const dropdownBox = await dropDown.boundingBox()
  const dropdownMenuBox = await dropDownMenu.boundingBox()
  const difference = dropdownBox.width - dropdownMenuBox.width

  await expect(difference > 1).toBe(true)
})

test('弹框最小宽度继承触发源宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#inherit-width')

  const wrap = page.locator('#inherit-width')
  const dropDown = wrap.locator('.tiny-dropdown').nth(1)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await page.waitForTimeout(1500)
  await dropDown.locator('.tiny-dropdown-trigger').hover()
  await expect(dropDownMenu).toBeVisible()
  // 弹框最小宽度和触发源宽度相同
  const dropdownBox = await dropDown.boundingBox()
  const dropdownMenuBox = await dropDownMenu.boundingBox()
  const difference = dropdownMenuBox.width - dropdownBox.width

  await expect(difference >= 0).toBe(true)
  await expect(dropDownMenu).toHaveCSS('min-width', `${dropdownBox.width}px`)
})
