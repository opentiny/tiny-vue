import { test, expect } from '@playwright/test'

test('高亮当前选中节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#highlight-current')

  const node = page.getByRole('treeitem', { name: '三级 1-1-1' }).first().locator('.tiny-tree-node__content').first()
  await node.click()
  await expect(page.locator('#preview .tiny-tree')).toHaveClass(/tiny-tree--highlight-current/)
})
