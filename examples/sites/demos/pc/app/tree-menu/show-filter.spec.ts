import { test, expect } from '@playwright/test'

test('默认可搜索 + 显示 title', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#show-filter')

  const wrap = page.locator('#show-filter')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(0)
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  // 显示输入框
  await expect(treeMenu).toHaveClass(/tiny-tree-menu__show-filter/)
  await expect(treeMenu.locator('.tiny-input__inner')).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^首页$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^指南$/ })).toBeVisible()
  await treeMenu.locator('.tiny-input__inner').fill('首页')
  await treeMenu.locator('.tiny-input__inner').press('Enter')
  await expect(treeNodeContent.filter({ hasText: /^首页$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^指南$/ })).toBeHidden()
  await treeMenu.locator('.tiny-input__inner').fill('')
  await treeMenu.locator('.tiny-input__inner').press('Enter')

  // 有 title 属性
  await expect(treeNodeContent.filter({ hasText: /^首页$/ }).locator('.tree-node-body')).toHaveAttribute(
    'title',
    '首页'
  )
  await expect(treeNodeContent.filter({ hasText: /^指南$/ }).locator('.tree-node-body')).toHaveAttribute(
    'title',
    '指南'
  )
})

test('不可搜索 + 不显示 title', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#show-filter')

  const wrap = page.locator('#show-filter')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(1)
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  // 显示输入框
  await expect(treeMenu).not.toHaveClass(/tiny-tree-menu__show-filter/)
  await expect(treeMenu.locator('.tiny-input__inner')).not.toBeVisible()

  // 有 title 属性
  await expect(treeNodeContent.filter({ hasText: /^首页$/ }).locator('.tree-node-body')).not.toHaveAttribute(
    'title',
    '首页'
  )
  await expect(treeNodeContent.filter({ hasText: /^指南$/ }).locator('.tree-node-body')).not.toHaveAttribute(
    'title',
    '指南'
  )
})
