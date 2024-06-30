import { test, expect } from '@playwright/test'

test('静态数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#data-resource')

  const wrap = page.locator('#data-resource')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(0)
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  await expect(treeNode.filter({ hasText: /^环境准备$/ })).toBeHidden()
  await treeNodeContent.filter({ hasText: /^使用指南$/ }).click()
  await expect(treeNode.filter({ hasText: /^环境准备$/ })).toBeVisible()
  await treeNode.filter({ hasText: /^环境准备$/ }).click()
  await expect(treeNode.filter({ hasText: /^环境准备$/ })).toHaveClass(/is-current/)
  await treeNodeContent.filter({ hasText: /^使用指南$/ }).click()
  await expect(treeNode.filter({ hasText: /^环境准备$/ })).toBeHidden()

  // 过滤功能
  await treeMenu.locator('.tiny-input__inner').fill('新增组件')
  await expect(page.getByTitle('新增组件')).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^使用指南$/ })).toBeHidden()
  await treeMenu.locator('.tiny-input__inner').clear()
  await expect(treeNodeContent.filter({ hasText: /^使用指南$/ })).toBeVisible()
})

test('服务端数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#data-resource')

  const wrap = page.locator('#data-resource')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(1)
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
