import { test, expect } from '@playwright/test'

test('初始化展开所有节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#default-expand-all')

  const tree = page.locator('#preview .tiny-tree')
  const expandClass = /is-expanded/
  await expect(tree.locator('.tiny-tree-node').first()).toHaveClass(expandClass)
  await expect(tree.locator('.tiny-tree-node').nth(1)).toHaveClass(expandClass)
  await expect(tree.locator('.tiny-tree-node').nth(2)).toHaveClass(expandClass)
  await expect(tree.locator('.tiny-tree-node').nth(3)).toBeVisible()
  await expect(tree.locator('.tiny-tree-node').nth(4)).toHaveClass(expandClass)
  await expect(tree.locator('.tiny-tree-node').nth(5)).toHaveClass(expandClass)
})
