import { test, expect } from '@playwright/test'

// 以下2个测试将覆盖2个demo：基本用法、数据源
test('基础用法、数据源', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fall-menu#data-resource')
  const preview = page.locator('.tiny-fall-menu__wrap')
  const fallMenuBox = page.locator('.tiny-fall-menu__box')
  // 父菜单列表
  const fallMenuList = page.locator('.tiny-fall-menu__list')
  // 菜单列表应该可见
  await expect(fallMenuBox).toBeHidden()
  await page.getByRole('link', { name: '指南' }).hover()
  await expect(fallMenuBox).toBeVisible()
  await expect(fallMenuBox).toBeHidden()
  await page.getByRole('link', { name: '教程' }).hover()
  await expect(fallMenuBox).toBeVisible()
  // 菜单列表应该不可见
  const rightSlotIcon = preview.locator('.icon-slot-right')
  // 点击右侧更多切换图标
  await rightSlotIcon.click()
  // 向左移动
  await expect(fallMenuList).toHaveCSS('left', /^-\d+px/)
  // 点击左侧更多切换图标
  const leftSlotIcon = preview.locator('.icon-slot-left')
  await leftSlotIcon.click()
  // 向右移动
  await expect(fallMenuList).toHaveCSS('left', '0px')
})
