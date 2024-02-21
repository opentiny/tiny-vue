import { test, expect } from '@playwright/test'

test('设置当前节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#current-node')

  const wrap = page.locator('#current-node')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const button = wrap.locator('.tiny-button')
  const currentCls = /is-current/

  // 通过key设置当前节点
  await button.nth(0).click()
  await expect(treeNode.filter({ hasText: /^按需引入$/ })).toHaveClass(currentCls)
  // 获取当前被选中节点的 key
  await button.nth(2).click()
  await expect(wrap.locator('.current-node-key')).toHaveText('20101')
  // 获取当前节点的数据
  await button.nth(3).click()
  await expect(wrap.locator('.current-node')).toHaveText('{ "id": 20101, "label": "按需引入" }')

  // 通过node设置当前节点
  await button.nth(1).click()
  await expect(treeNode.filter({ hasText: /^规范$/ })).toHaveClass(currentCls)
  // 获取当前被选中节点的 key
  await button.nth(2).click()
  await expect(wrap.locator('.current-node-key')).toHaveText('500')
  // 获取当前节点的数据
  await button.nth(3).click()
  await expect(wrap.locator('.current-node')).toHaveText('{ "id": 500, "label": "规范" }')
})
