import { test, expect } from '@playwright/test'

test('默认展开某节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#default-expanded-keys')

  const wrap = page.locator('#default-expanded-keys')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  // 默认展开节点
  await expect(treeNodeContent.filter({ hasText: /^数据组件$/ })).toBeVisible()
  // 默认展开节点的祖先节点展开
  await expect(treeNodeContent.filter({ hasText: /^组件/ })).toBeVisible()
  // 默认展开节点兄弟节点展开
  await expect(treeNodeContent.filter({ hasText: /^导航组件$/ })).toBeVisible()
  // 默认展开节点的下一层次节点不展开
  await expect(treeNodeContent.filter({ hasText: /^Datepicker 日期$/ })).toBeVisible()
  // 非默认展开节点子的祖先节点的子节点不展开
  await expect(treeNodeContent.filter({ hasText: /^页面布局/ })).toBeHidden()
})
