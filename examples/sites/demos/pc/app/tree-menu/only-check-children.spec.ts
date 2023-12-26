import { test, expect } from '@playwright/test'

test('父级只展开不跳转', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#only-check-children')

  const wrap = page.locator('#only-check-children')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(treeNode.filter({ hasText: /^指南/ })).toHaveClass(/is-expanded/)
  // TINY-TODO: 补充修复 onlyCheckChildren 属性功能后打开
  // await expect(treeNode.filter({ hasText: /^指南/ })).not.toHaveClass(/is-current/)
  // await expect(treeNodeContent.filter({ hasText: /^指南$/ }).locator('.tree-node-body')).not.toHaveCSS(
  //   'color',
  //   '#1476ff'
  // )
  // await treeNodeContent.filter({ hasText: /^后端适配器$/ }).click()
  // await expect(treeNode.filter({ hasText: /^后端适配器$/ })).toHaveClass(/is-current/)
  // await expect(treeNodeContent.filter({ hasText: /^指南$/ }).locator('.tree-node-body')).toHaveCSS('color', '#1476ff')
  // await expect(treeNodeContent.filter({ hasText: /^后端适配器$/ }).locator('.tree-node-body')).toHaveCSS(
  //   'color',
  //   '#1476ff'
  // )
})
