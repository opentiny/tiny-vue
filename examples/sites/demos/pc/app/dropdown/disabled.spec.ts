import { test, expect } from '@playwright/test'

test('禁用下拉菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#disabled')

  const wrap = page.locator('#disabled')
  const disabledDropDown = wrap.locator('.tiny-dropdown').nth(0)
  const dropDownTrigger = disabledDropDown.locator('.tiny-dropdown__trigger')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')

  await expect(dropDownTrigger).toHaveClass(/is-disabled/)
  await expect(dropDownTrigger).toHaveCSS('cursor', 'not-allowed')
  await expect(dropDownTrigger).toHaveCSS('color', 'rgb(173, 176, 184)')
  await expect(disabledDropDown.locator('svg')).toHaveCSS('fill', 'rgb(173, 176, 184)')
  await page.waitForTimeout(1200)
  await disabledDropDown.hover()
  await expect(dropDownMenu).not.toBeVisible()
})

test('按钮类型禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#disabled')

  const wrap = page.locator('#disabled')
  const dropDown = wrap.locator('.tiny-dropdown').nth(1)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const textButton = dropDown.locator('.tiny-button').nth(0)
  const triggerButton = dropDown.locator('.tiny-button').nth(1)

  // 按钮有禁用类名
  await expect(textButton).toHaveClass(/is-disabled/)
  await expect(triggerButton).toHaveClass(/is-disabled/)
  // 禁用手势
  await expect(textButton).toHaveCSS('cursor', 'not-allowed')
  await expect(triggerButton).toHaveCSS('cursor', 'not-allowed')
  // 禁用文本色
  await expect(textButton).toHaveCSS('color', 'rgb(173, 176, 184)')
  await expect(triggerButton).toHaveCSS('color', 'rgb(173, 176, 184)')
  // 图标禁用色
  await expect(triggerButton.locator('svg')).toHaveCSS('fill', 'rgb(173, 176, 184)')
  await page.waitForTimeout(1200)
  await triggerButton.hover()
  await expect(dropDownMenu).not.toBeVisible()
})

test('菜单项禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#disabled')

  const wrap = page.locator('#disabled')
  const dropDown = wrap.locator('.tiny-dropdown').nth(2)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await page.waitForTimeout(1200)
  await dropDown.hover()
  await expect(dropDownMenu).toBeVisible()
  await expect(dropDownMenuItem.filter({ hasText: '不能选择' })).toHaveClass(/is-disabled/)
  await expect(dropDownMenuItem.filter({ hasText: '不能选择' })).toHaveCSS('color', 'rgb(173, 176, 184)')
})
