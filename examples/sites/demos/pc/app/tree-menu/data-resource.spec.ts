import { test, expect } from '@playwright/test'

test('静态数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#data-resource')

  const wrap = page.locator('#data-resource')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(0)
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await expect(treeNode.filter({ hasText: /^后端适配器$/ })).toBeHidden()
  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(treeNode.filter({ hasText: /^后端适配器$/ })).toBeVisible()
  await treeNode.filter({ hasText: /^后端适配器$/ }).click()
  await expect(treeNode.filter({ hasText: /^后端适配器$/ })).toHaveClass(/is-current/)
  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(treeNode.filter({ hasText: /^后端适配器$/ })).toBeHidden()

  // 过滤功能
  await treeMenu.locator('.tiny-input__inner').fill('添加标签页')
  await expect(page.getByTitle('添加标签页')).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^指南$/ })).toBeHidden()
  await treeMenu.locator('.tiny-input__inner').clear()
  await expect(treeNodeContent.filter({ hasText: /^指南$/ })).toBeVisible()
})

test('服务端数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#data-resource')

  const wrap = page.locator('#data-resource')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(1)
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ })).toBeHidden()
  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ })).toBeVisible()
  await expect(treeNode.filter({ hasText: /^按需引入$/ })).toBeHidden()
  await treeNodeContent.filter({ hasText: /^引入组件$/ }).click()
  await expect(treeNode.filter({ hasText: /^按需引入$/ })).toBeVisible()
  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(treeNode.filter({ hasText: /^按需引入$/ })).toBeHidden()
  await expect(treeNodeContent.filter({ hasText: /^组件$/ })).toBeVisible()
  await expect(treeNode.filter({ hasText: /^规范$/ })).toBeVisible()
})
