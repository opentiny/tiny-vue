import { test, expect } from '@playwright/test'

test('自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fall-menu#custom-menuitem')
  // 子菜单列表容器
  const fallMenuBox = page.locator('.tiny-fall-menu__box')
  const preview = page.locator('.tiny-fall-menu__wrap')
  // 父菜单列表
  const fallMenuList = page.locator('.tiny-fall-menu__list')
  // await preview.getByText(/首页/).hover()
  await expect(fallMenuBox).toBeHidden()
  await preview.getByText(`指南 level1 `, { exact: false }).hover()
  await expect(fallMenuBox).toBeVisible()
  // 点击左、右侧图标切换列表
  await preview.locator('.tiny-fall-menu__nav > .tiny-fall-menu__subnav > .icon-slot-right').click()
  await expect(fallMenuList).toHaveCSS('left', /^-\d+px/)
  await preview.locator('.tiny-fall-menu__nav > .tiny-fall-menu__subnav > .icon-slot-left').click()
  await expect(fallMenuList).toHaveCSS('left', '0px')
})
