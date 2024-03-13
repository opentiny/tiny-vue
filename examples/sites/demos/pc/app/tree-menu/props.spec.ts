import { test, expect } from '@playwright/test'

test('字段映射', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#props')

  const wrap = page.locator('#props')
  const treeMenu = wrap.locator('.tiny-tree-menu')
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
  await page.waitForTimeout(500)
  await expect(treeNodeContent.filter({ hasText: /^添加标签页$/ })).toBeVisible()
  await expect(treeNodeContent.filter({ hasText: /^指南$/ })).toBeHidden()
  await treeMenu.locator('.tiny-input__inner').clear()
  await expect(treeNodeContent.filter({ hasText: /^指南$/ })).toBeVisible()
})
