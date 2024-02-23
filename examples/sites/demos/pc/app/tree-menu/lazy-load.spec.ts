import { test, expect } from '@playwright/test'

test('懒加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#lazy-load')

  const wrap = page.locator('#lazy-load')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await treeNodeContent.filter({ hasText: /^表单组件$/ }).click()
  await expect(treeNodeContent.filter({ hasText: /^表单组件1$/ })).not.toBeVisible()
  // 等到异步加载完成
  await page.waitForTimeout(600)
  await expect(treeNodeContent.filter({ hasText: /^表单组件1$/ })).toBeVisible()
})
