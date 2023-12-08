import { test, expect } from '@playwright/test'

test('点击文字展开菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#expand-on-click-node')

  const wrap = page.locator('#expand-on-click-node')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(0)
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(treeNodeContent.filter({ hasText: /^后端适配器$/ })).toBeVisible()
})

test('点击展开按钮才可展开菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#expand-on-click-node')

  const wrap = page.locator('#expand-on-click-node')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(1)
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  // 点击非展开按钮位置，只高亮，不展开
  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(treeNodeContent.filter({ hasText: /^后端适配器$/ })).toBeHidden()
  await expect(treeNode.filter({ hasText: /^指南/ })).toHaveClass(/is-current/)
  await expect(treeNode.filter({ hasText: /^指南/ })).not.toHaveClass(/is-expanded/)

  // 点击展开按钮，才展开
  await treeNodeContent
    .filter({ hasText: /^指南$/ })
    .locator('.tree-node-icon')
    .click()
  await expect(treeNodeContent.filter({ hasText: /^后端适配器$/ })).toBeVisible()
  await expect(treeNode.filter({ hasText: /^指南/ })).toHaveClass(/is-expanded/)
  await expect(treeNode.filter({ hasText: /^指南/ })).toHaveClass(/is-current/)
})
