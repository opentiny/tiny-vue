import { test, expect } from '@playwright/test'

// 以下2个测试将覆盖2个demo：基本用法、数据源
test('基础用法、数据源', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fall-menu#data-resource')
  const preview = page.locator('.tiny-fall-menu__wrap')
  // const fallMenuBox = page.locator('.tiny-fall-menu__box')
  const rightSlotIcon = preview.locator('.tiny-fall-menu__nav > .tiny-fall-menu__subnav > .icon-slot-right')
  const leftSlotIcon = preview.locator('.tiny-fall-menu__nav > .tiny-fall-menu__subnav > .icon-slot-left')
  // 父菜单列表
  const fallMenuList = page.locator('.tiny-fall-menu__list')
  // 菜单列表应该可见
  // await expect(fallMenuBox).toBeHidden()
  await preview.getByText(`指南`, { exact: false }).click()
  // await expect(fallMenuBox).toBeVisible()
  // 菜单列表应该不可见
  // 点击右侧更多切换图标
  await rightSlotIcon.click()
  // 向左移动
  await expect(fallMenuList).toHaveCSS('left', /^-\d+px/)
  // 点击左侧更多切换图标
  await leftSlotIcon.click()
  // 向右移动
  await expect(fallMenuList).toHaveCSS('left', '0px')
})
