import { test, expect } from '@playwright/test'

test('触发对象,配置split-button属性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#split-button')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const textBtn = dropDown.locator('button').first()
  const dropDownBtn = dropDown.locator('button').nth(1)

  // 是否变成了按钮且按钮样式是否生效
  await expect(dropDown.locator('button')).toHaveCount(2)
  await expect(textBtn).toHaveCSS('background-color', 'rgb(80, 212, 171)')
  await expect(textBtn).toHaveCSS('color', 'rgb(255, 255, 255)')
  await expect(dropDownBtn).toHaveCSS('background-color', 'rgb(80, 212, 171)')
  await expect(dropDownBtn).toHaveCSS('color', 'rgb(255, 255, 255)')
  // 文字悬浮不出现下拉菜单
  await textBtn.hover()
  await expect(dropDownMenu).not.toBeVisible()
  await dropDownBtn.hover()
  await expect(dropDownMenu).toBeVisible()
})
