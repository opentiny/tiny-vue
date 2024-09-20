import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#basic-usage')

  const wrap = page.locator('#basic-usage')
  const dropDown = wrap.locator('.tiny-dropdown')

  const dropDownMenu = page.locator('body').locator('.my-class')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')
  const dropDownSvg = dropDown.locator('svg')

  // 箭头是否存在
  await expect(dropDownSvg).toBeVisible()
  await expect(dropDownSvg.locator('path')).toHaveAttribute(
    'd',
    'M8 11.43c-.15 0-.31-.06-.42-.18L1.92 5.6c-.23-.23-.23-.61 0-.85s.61-.23.85 0L8 9.98l5.23-5.23a.61.61 0 0 1 .85 0c.23.23.23.61 0 .85l-5.66 5.66c-.11.11-.27.17-.42.17z'
  )

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
  await expect(dropDownMenuItem.first()).toHaveCSS('color', 'rgb(25, 25, 25)')
  await expect(dropDownMenuItem.first()).toHaveCSS('background-color', 'rgb(245, 245, 245)')
  // 点击菜单项后菜单消失
  await dropDownMenuItem.first().click()
  await expect(dropDownMenu).not.toBeVisible()
})
