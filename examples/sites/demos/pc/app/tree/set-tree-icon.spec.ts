import { test, expect } from '@playwright/test'

test('展开折叠图标分别设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#set-tree-icon')

  const node = page.getByRole('treeitem', { name: '一级 1' }).first()

  await node.click()
  const collapseIcon = node.locator('.tree-node-icon').first()
  const expendIcon = node.locator('.tree-node-icon').nth(1)
  expect(collapseIcon).not.toEqual(expendIcon)
})
