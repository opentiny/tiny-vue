import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#basic-usage')
  const preview = page.locator('#preview')
  const nodes = preview.locator('.tiny-toggle-menu .tiny-tree > div')
  // 点击文字展开
  await preview.getByTitle('更新日志').click()
  // 点击文字展开
  await preview.getByTitle('开发指南').hover()
  // “更新日志”应该被选中
  await expect(nodes.first().locator('.tiny-tree-node__content')).toHaveCSS('background-color', 'rgb(94, 124, 224)')

  // 点击文字展开
  await preview.getByTitle('开发指南').click()
  // 子菜单应该可见
  await expect(nodes.nth(1).locator('.tiny-tree-node__children')).toBeVisible()

  // 点击下拉图标展开
  await preview.getByRole('treeitem', { name: '表单组件' }).locator('svg').click()
  // // 子菜单应该可见
  await expect(nodes.nth(2).locator('.tiny-tree-node__children')).toBeVisible()

  // 点击整个元素展开
  await preview.getByRole('treeitem', { name: '数据组件' }).locator('div').nth(1).click()
  // 子菜单应该可见
  await expect(nodes.nth(3).locator('.tiny-tree-node__children')).toBeVisible()

  // 点击整个元素收起
  await preview.getByRole('treeitem', { name: '数据组件' }).locator('div').nth(1).click()
  // 子菜单应该可见
  await expect(nodes.nth(3).locator('.tiny-tree-node__children')).not.toBeVisible()

  await preview.getByPlaceholder('请输入内容进行筛选').click()
  // 输入筛选关键字
  await preview.getByPlaceholder('请输入内容进行筛选').fill('组件')
  await expect(preview.locator('.tiny-tree .tiny-tree-node:visible')).toHaveCount(5)

  // 点击右侧收缩按钮
  await page.locator('.tiny-toggle-menu__toggle').click()
  // 收缩项文字不可见
  await expect(preview.locator('.tiny-tree .tiny-toggle-menu__body:visible')).toHaveCount(0)
  // 过滤框应该不可见
  await expect(preview.locator('.tiny-toggle-menu .tiny-toggle-menu__filter')).toBeHidden()
})
