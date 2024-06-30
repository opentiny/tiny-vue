import { test, expect } from '@playwright/test'

// 场景1
test('配置式：使用 menu-options', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#options')

  const wrap = page.locator('#options')
  const dropDown = wrap.locator('.tiny-dropdown').first()
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await expect(dropDown).toContainText('下拉菜单') // 增加这一行，可以保证hover()是成功的。
  await page.waitForTimeout(200)
  await dropDown.hover()
  await expect(dropDownMenu.first()).toBeVisible()
  await expect(dropDownMenuItem.first()).toContainText('老友粉')
  await expect(dropDownMenuItem.first()).toHaveClass(/is-disabled/)
  await expect(dropDownMenuItem.nth(2)).toContainText('黄金糕')
  // 检测配置的图标是否出现
  await expect(dropDownMenuItem.nth(2).locator('svg > path')).toHaveAttribute('d', /^M12 2\.8c\.1 0.+2-\.6-\.3-1-\.3z$/)
})

// 场景2
test('配置式：使用 menu-options 和 title', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#options')

  const wrap = page.locator('#options')
  const dropDown = wrap.locator('.tiny-dropdown').nth(1)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await expect(dropDown).toContainText('点击下拉')
  await dropDown.hover()
  await page.waitForTimeout(300)
  await expect(dropDownMenu.first()).toBeVisible()
  await expect(dropDownMenuItem.first()).toContainText('老友粉')
  await expect(dropDownMenuItem.first()).toHaveClass(/is-disabled/)
  await expect(dropDownMenuItem.nth(2)).toContainText('黄金糕')
  // 检测配置的图标是否出现
  await expect(dropDownMenuItem.nth(2).locator('svg > path')).toHaveAttribute('d', /^M12 2\.8c\.1 0.+2-\.6-\.3-1-\.3z$/)
})

// 场景3
test('配置式：使用 menu-options 和 text-field', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#options')

  const wrap = page.locator('#options')
  const dropDown = wrap.locator('.tiny-dropdown').nth(2)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await page.waitForTimeout(2000)
  await dropDown.hover()
  await expect(dropDownMenu.first()).toBeVisible()
  await expect(dropDownMenuItem.first()).toContainText('老友粉')
  await expect(dropDownMenuItem.first()).toHaveClass(/is-disabled/)
  await expect(dropDownMenuItem.nth(2)).toContainText('黄金糕')
  // 检测配置的图标是否出现
  await expect(dropDownMenuItem.nth(2).locator('svg > path')).toHaveAttribute('d', /^M12 2\.8c\.1 0.+2-\.6-\.3-1-\.3z$/)
})

// 场景4
test('配置式：使用 options', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#options')

  const wrap = page.locator('#options')
  const dropDown = wrap.locator('.tiny-dropdown').nth(3)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await expect(dropDown).toContainText('下拉菜单')
  await page.waitForTimeout(300)
  await dropDown.hover()
  await expect(dropDownMenu.first()).toBeVisible()
  await expect(dropDownMenuItem.first()).toContainText('老友粉')
  await expect(dropDownMenuItem.first()).toHaveClass(/is-disabled/)
  await expect(dropDownMenuItem.nth(2)).toContainText('黄金糕')
  // 检测配置的图标是否出现
  await expect(dropDownMenuItem.nth(2).locator('svg > path')).toHaveAttribute('d', /^M12 2\.8c\.1 0.+2-\.6-\.3-1-\.3z$/)
})

// 场景5
test('配置式：使用 options 和 text-field ', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#options')

  const wrap = page.locator('#options')
  const dropDown = wrap.locator('.tiny-dropdown').nth(4)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')

  await expect(dropDown).toContainText('下拉菜单')
  await page.waitForTimeout(300)
  await dropDown.hover()
  await expect(dropDownMenu.first()).toBeVisible()
  await expect(dropDownMenuItem.first()).toContainText('老友粉')
  await expect(dropDownMenuItem.first()).toHaveClass(/is-disabled/)
  await expect(dropDownMenuItem.nth(2)).toContainText('黄金糕')
  // 检测配置的图标是否出现
  await expect(dropDownMenuItem.nth(2).locator('svg > path')).toHaveAttribute('d', /^M12 2\.8c\.1 0.+2-\.6-\.3-1-\.3z$/)
})
