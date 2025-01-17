import { test, expect } from '@playwright/test'

test('服务端数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#data-resource')

  const wrap = page.locator('#data-resource')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ })).toBeHidden()
  await treeNodeContent.filter({ hasText: /^使用指南$/ }).click()
  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ })).toBeVisible()
  await expect(treeNode.filter({ hasText: /^按需引入$/ })).toBeHidden()
  await treeNodeContent.filter({ hasText: /^引入组件$/ }).click()
  await expect(treeNode.filter({ hasText: /^按需引入$/ })).toBeVisible()
  await treeNodeContent.filter({ hasText: /^使用指南$/ }).click()
  await expect(treeNode.filter({ hasText: /^按需引入$/ })).toBeHidden()
  await expect(treeNodeContent.filter({ hasText: /^导航组件$/ })).toBeVisible()
  await expect(treeNode.filter({ hasText: /^容器组件$/ })).toBeVisible()
})
