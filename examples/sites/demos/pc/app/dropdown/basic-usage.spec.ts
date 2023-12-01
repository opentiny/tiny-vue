import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#basic-usage')

  const wrap = page.locator('#basic-usage')
  const dropDown = wrap.locator('.tiny-dropdown')
  console.log(dropDown)
  const dropDownMenu = page.locator('body').locator('.my-class')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')
  const dropDownSvg = dropDown.locator('svg')

  // 箭头是否存在
  await expect(dropDownSvg).toBeVisible()
  await expect(dropDownSvg.locator('path')).toHaveAttribute('d', 'M2 6h20L12 19z')

  await page.waitForTimeout(500)
  await dropDown.hover()
  await expect(dropDownMenu).toBeVisible()
  // 箭头是否变成向上
  await expect(dropDown.locator('.tiny-dropdown--visible')).toHaveCSS('transform', 'matrix(1, 0, 0, -1, 0, 0)')
  await expect(dropDownMenuItem).toHaveCount(6)
  await expect(dropDownMenuItem.filter({ hasText: '双皮奶' })).toHaveClass(/is-disabled/)
  await expect(dropDownMenuItem.filter({ hasText: '双皮奶' })).toHaveCSS('cursor', 'not-allowed')

  // 测试悬浮效果
  await page.waitForTimeout(500)
  await dropDownMenuItem.first().hover()
  await expect(dropDownMenuItem.first()).toHaveCSS('color', 'rgb(82, 110, 204)')
  await expect(dropDownMenuItem.first()).toHaveCSS('background-color', 'rgb(242, 245, 252)')
  // 点击菜单项后菜单消失
  await dropDownMenuItem.first().click()
  await expect(dropDownMenu).not.toBeVisible()
})
