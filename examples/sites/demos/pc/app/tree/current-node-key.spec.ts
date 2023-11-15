import { test, expect } from '@playwright/test'

test('当前选中节点标志', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#current-node-key')

  const selectedNodeClass = /is-current/
  const tree = page.locator('#preview .tiny-tree')
  await expect(page.getByRole('treeitem', { name: '一级 2' }).first()).toHaveClass(selectedNodeClass)
  await expect(page.getByRole('treeitem', { name: '一级 1' }).first()).not.toHaveClass(selectedNodeClass)
  await expect(tree.locator('.tiny-tree-node').filter({ hasText: '二级 2-1' }).nth(1)).not.toHaveClass(
    selectedNodeClass
  )
  await expect(page.getByRole('treeitem', { name: '二级 3-2' }).first()).not.toHaveClass(selectedNodeClass)
})
