import { test, expect } from '@playwright/test'

// 以下2个测试将覆盖2个demo：基本用法、数据源
test('基础用法、数据源', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fall-menu#data-resource')
  const preview = page.locator('#preview')
  await preview.getByRole('link', { name: '指南' }).hover()
  const fallMenuBox = preview.locator('.tiny-fall-menu__box')
  // 父菜单列表
  const fallMenuList = preview.locator('.tiny-fall-menu__list')
  // 菜单列表应该可见
  await expect(fallMenuBox).toBeVisible()
  await preview.getByRole('link', { name: '规范' }).hover()
  // 菜单列表应该不可见
  await expect(fallMenuBox).toBeHidden()
  // 点击右侧更多切换图标
  await preview.getByRole('img').nth(1).click()
  // 向左移动
  await expect(fallMenuList).toHaveCSS('left', /^-\d+px/)
  // 点击左侧更多切换图标
  await preview.getByRole('img').nth(1).click()
  // 向右移动
  await expect(fallMenuList).toHaveCSS('left', '0px')
})
