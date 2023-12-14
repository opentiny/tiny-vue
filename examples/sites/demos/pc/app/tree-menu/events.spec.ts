import { test, expect } from '@playwright/test'

test('节点被点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#events')

  const wrap = page.locator('#events')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const modal = page.locator('.tiny-modal')

  await treeNode.getByTitle('首页', { exact: true }).click()
  await expect(modal.filter({ hasText: '节点-首页被点击了' })).toBeVisible()
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await expect(modal.filter({ hasText: '节点-指南被点击了' })).toBeVisible()
  await treeMenu.getByTitle('后端适配器', { exact: true }).click()
  await expect(modal.filter({ hasText: '节点-后端适配器被点击了' })).toBeVisible()
})

test('当前选中节点变化事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#events')

  const wrap = page.locator('#events')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')
  const modal = page.locator('.tiny-modal')

  await treeNodeContent
    .filter({ hasText: /^指南$/ })
    .locator('.tiny-checkbox')
    .click()
  await expect(modal.filter({ hasText: '选中节点变化为:指南' })).toBeVisible()
  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await treeNodeContent
    .filter({ hasText: /^后端适配器$/ })
    .locator('.tiny-checkbox')
    .click()
  await expect(modal.filter({ hasText: '选中节点变化为:后端适配器' })).toBeVisible()
})

test('节点被折叠时触发的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#events')

  const wrap = page.locator('#events')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')
  const modal = page.locator('.tiny-modal')

  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(modal.filter({ hasText: '节点-指南被关闭了' })).toBeVisible()
})

test('节点被展开时触发的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#events')

  const wrap = page.locator('#events')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')
  const modal = page.locator('.tiny-modal')

  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(modal.filter({ hasText: '节点-指南被打开了' })).toBeVisible()
})

test('节点选中状态发生变化时的回调', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#events')

  const wrap = page.locator('#events')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')
  const modal = page.locator('.tiny-modal')
  const checkBox = treeNodeContent.filter({ hasText: /^首页$/ }).locator('.tiny-checkbox')

  // 选中节点
  await checkBox.click()
  await expect(modal.filter({ hasText: '节点-首页被选中了' })).toBeVisible()

  // 取消选中
  await checkBox.click()
  await expect(modal.filter({ hasText: '节点-首页被取消了' })).toBeVisible()
})
