import { test, expect } from '@playwright/test'

test('底部一键展开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#show-expand')

  const wrap = page.locator('#show-expand')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')
  const expandButton = treeMenu.locator('.tiny-tree-menu__expand .tiny-svg')

  await expect(treeNodeContent.filter({ hasText: /^指南$/ }).locator('.tree-node-name .tiny-svg')).toBeVisible()
  // TINY-TODO: showExpand 功能补全后打开
  /*  await expect(expandButton).toBeVisible()
  // 点击收起
  await expandButton.click()
  await expect(treeNodeContent.filter({ hasText: /^指南$/ }).locator('.tree-node-name .tiny-svg')).toBeVisible()
  await expect(treeMenu).toHaveClass(/tiny-tree-menu__collapse/)
  await expect(treeMenu).toHaveCSS('overflow', 'hidden')
  await expect(treeMenu).toHaveCSS('width', '48px')
  await expect(treeMenu).toHaveCSS('padding-right', '0')
  await expect(expandButton).toBeVisible()
  // 点击展开
  await expandButton.click()
  await expect(treeNodeContent.filter({ hasText: /^指南$/ }).locator('.tree-node-name .tiny-svg')).toBeVisible()
  await expect(treeMenu).not.toHaveClass(/tiny-tree-menu__collapse/)
  await expect(expandButton).toBeVisible() */
})

test('自定义节点图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#show-expand')

  const wrap = page.locator('#show-expand')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await expect(treeNodeContent.filter({ hasText: /^指南$/ }).locator('.tree-node-name .tiny-svg')).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^首页$/ }).locator('.tree-node-name .tiny-svg')).toBeVisible()
})
