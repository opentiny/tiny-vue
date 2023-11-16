import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#basic-usage')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const dropDownMenuItem = page.locator('body > .tiny-dropdown-menu > .tiny-dropdown-item')

  await expect(dropDown.locator('svg > path')).toHaveAttribute('d', 'M2 6h20L12 19z')
  await dropDown.hover()
  await expect(dropDownMenu).toBeVisible()
  // 箭头是否变成向上
  await expect(dropDown.locator('svg')).toHaveCSS('transform', 'matrix(-1, 0, 0, -1, 0, 0)')
  await expect(dropDownMenuItem).toHaveCount(6)
  await expect(dropDownMenuItem.filter({ hasText: '双皮奶' })).toHaveClass(/is-disabled/)
  await expect(dropDownMenuItem.filter({ hasText: '双皮奶' })).toHaveCSS('cursor', 'not-allowed')

  // 测试悬浮效果
  await dropDownMenuItem.first().hover()
  await expect(dropDownMenuItem.first()).toHaveCSS('color', 'rgb(82, 110, 204)')
  await expect(dropDownMenuItem.first()).toHaveCSS('background-color', 'rgb(242, 245, 252)')
  // 点击菜单项后菜单消失
  await dropDownMenuItem.first().click()
  await expect(dropDownMenu).not.toBeVisible()
})
