import { test, expect } from '@playwright/test'

test('搜索规则配置 精确匹配', async ({ page }) => {
  await page.goto('tree-menu#filter-node-method')

  const wrap = page.locator('#filter-node-method')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await treeMenu.locator('.tiny-input__inner').fill('组件')
  await expect(treeNodeContent.filter({ hasText: /^组件$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ })).not.toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^表单组件$/ })).not.toBeVisible()
})
