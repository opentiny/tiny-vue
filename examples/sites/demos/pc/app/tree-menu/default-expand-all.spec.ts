import { test, expect } from '@playwright/test'

test('默认展开全部菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#default-expand-all')

  const wrap = page.locator('#default-expand-all')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await expect(treeNode.filter({ hasText: /^指南/ })).toHaveClass(/is-expanded/)
  await expect(treeNode.filter({ hasText: /^引入组件/ })).toHaveClass(/is-expanded/)
  await expect(treeNode.filter({ hasText: /^组件/ })).toHaveClass(/is-expanded/)
  await expect(treeNode.filter({ hasText: /^表单组件/ })).toHaveClass(/is-expanded/)
  await expect(treeNode.filter({ hasText: /^教程/ })).toHaveClass(/is-expanded/)
  await expect(treeNode.filter({ hasText: /^页面布局/ })).toHaveClass(/is-expanded/)
  await expect(treeNode.filter({ hasText: /^查询功能/ })).toHaveClass(/is-expanded/)
  await expect(treeNode.filter({ hasText: /^新增功能/ })).toHaveClass(/is-expanded/)
  await expect(treeNode.filter({ hasText: /^编辑功能/ })).toHaveClass(/is-expanded/)

  await expect(treeNodeContent.filter({ hasText: /^首页$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^按需引入$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^Button 按钮$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^业务组件$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^添加标签页$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^添加查询页面$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^表单新增功能$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^开启编辑功能$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^更新日志$/ })).toBeVisible()
})
