import { test, expect } from '@playwright/test'

test('默认勾选的节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#default-checked-keys')

  const tree = page.locator('#preview .tiny-tree')
  const checkedClass = /is-checked/
  await expect(tree.locator('.tiny-tree-node').nth(2).locator('.tiny-checkbox__input')).toHaveClass(checkedClass)
  await expect(page.getByRole('treeitem', { name: '一级 2' }).locator('span').nth(1)).toHaveClass(checkedClass)
  await expect(page.getByRole('treeitem', { name: '二级 2-1' }).locator('span').nth(1)).toHaveClass(checkedClass)
  await expect(page.getByRole('treeitem', { name: '二级 2-2' }).locator('span').nth(1)).toHaveClass(checkedClass)

  await expect(page.getByRole('treeitem', { name: '三级 1-1-2' }).locator('span').nth(1)).not.toHaveClass(checkedClass)
  await expect(page.getByRole('treeitem', { name: '二级 3-1' }).locator('span').nth(1)).not.toHaveClass(checkedClass)
  await expect(page.getByRole('treeitem', { name: '二级 3-2' }).locator('span').nth(1)).not.toHaveClass(checkedClass)
})
