import { test, expect } from '@playwright/test'

test('默认展开某节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#default-expanded-keys')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  // 默认展开节点
  await expect(treeMenu.getByTitle('数据组件')).toBeVisible()
  // 默认展开节点的祖先节点展开
  await expect(treeMenu.getByTitle('组件', { exact: true }).first()).toBeVisible()
  // 默认展开节点兄弟节点展开
  await expect(treeMenu.getByTitle('导航组件')).toBeVisible()
  // 默认展开节点的下一层次节点不展开
  await expect(treeMenu.getByTitle('Datepicker 日期')).not.toBeVisible()
  // 非默认展开节点子的祖先节点的子节点不展开
  await expect(treeMenu.getByTitle('页面布局')).not.toBeVisible()
})
