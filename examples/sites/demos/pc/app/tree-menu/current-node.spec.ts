import { test, expect } from '@playwright/test'

test('设置当前节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#current-node')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  const currentCls = /is-current/

  // 通过key设置当前节点
  await page.getByRole('button', { name: '设置当前选中的节点的 key' }).click()
  await expect(treeMenu.locator('.tiny-tree-node').filter({ hasText: '按需引入' }).nth(2)).toHaveClass(currentCls)
  await page.getByRole('button', { name: '获取当前被选中节点的 key' }).click()
  await expect(page.locator('#current-node-key')).toHaveText('20101')
  await page.getByRole('button', { name: '获取当前选中的节点' }).click()
  await expect(page.locator('#current-node')).toHaveText('{ "id": 20101, "label": "按需引入" }')

  // 通过node设置当前节点
  await page.getByRole('button', { name: '设置当前选中的节点' }).nth(1).click()
  await expect(treeMenu.locator('.tiny-tree-node').filter({ hasText: '规范' })).toHaveClass(currentCls)
  await page.getByRole('button', { name: '获取当前被选中节点的 key' }).click()
  await expect(page.locator('#current-node-key')).toHaveText('500')
  await page.getByRole('button', { name: '获取当前选中的节点' }).click()
  await expect(page.locator('#current-node')).toHaveText('{ "id": 500, "label": "规范" }')
})
