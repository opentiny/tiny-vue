import { test, expect } from '@playwright/test'

test('节点水平缩进', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#tree-menu-indent')

  const node = page.locator('#preview .tiny-tree-menu').getByText('指南', { exact: true })
  const childNode = page.locator('#preview .tiny-tree-menu').getByRole('treeitem', { name: '引入组件' }).first()
  await node.click()
  await expect(childNode.locator('.tiny-tree-node__content')).toHaveCSS('padding-left', '50px')
})
