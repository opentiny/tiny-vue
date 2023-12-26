import { test, expect } from '@playwright/test'

test('显示数字', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#show-number')

  const wrap = page.locator('#show-number')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await expect(treeNodeContent.filter({ hasText: /首页$/ }).locator('.tree-node-number')).toHaveText('0')
  await expect(treeNodeContent.filter({ hasText: /指南$/ }).locator('.tree-node-number')).toHaveText('9999')
  await expect(treeNodeContent.filter({ hasText: /按需引入$/ }).locator('.tree-node-number')).toHaveText('9.9k')
  await expect(treeNodeContent.filter({ hasText: /完整引入$/ }).locator('.tree-node-number')).toHaveText('1')
  await expect(treeNodeContent.filter({ hasText: /后端适配器$/ }).locator('.tree-node-number')).toHaveText('0')
})
