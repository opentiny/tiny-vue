import { test, expect } from '@playwright/test'

test('自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fall-menu#custom-menuitem')
  const preview = page.locator('#preview')
  // 子菜单列表容器
  const fallMenuBox = preview.locator('.tiny-fall-menu__box')
  // 父菜单列表
  const fallMenuList = preview.locator('.tiny-fall-menu__list')
  await page.getByText('首页level1').hover()
  await expect(fallMenuBox).toBeHidden()
  await page.getByText('指南level1').hover()
  await expect(fallMenuBox).toBeVisible()
  // 点击左、右侧图标切换列表
  await preview.locator('.icon-slot-right').click()
  await expect(fallMenuList).toHaveCSS('left', /^-\d+px/)
  await preview.locator('.icon-slot-left').click()
  await expect(fallMenuList).toHaveCSS('left', '0px')
})
