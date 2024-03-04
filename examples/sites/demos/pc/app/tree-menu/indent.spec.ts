import { test, expect } from '@playwright/test'

test('节点水平缩进', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#indent')

  const wrap = page.locator('#indent')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')
  const node = treeNodeContent.filter({ hasText: /^指南$/ })
  const childNode = treeNodeContent.filter({ hasText: /^引入组件$/ })

  await node.click()
  await expect(childNode.locator('.tiny-tree-node__content-indent')).toHaveCSS('width', '50px')
})
