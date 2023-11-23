import { test, expect } from '@playwright/test'

test('节点被点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-node-click')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('首页', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '节点-首页被点击了' }).nth(1)).toBeVisible()
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '节点-指南被点击了' }).nth(1)).toBeVisible()
  await treeMenu.getByTitle('后端适配器', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '节点-后端适配器被点击了' }).nth(1)).toBeVisible()
})


test('当前选中节点变化事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-current-change')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '选中节点变化为:指南' }).nth(1)).toBeVisible()
  await treeMenu.getByTitle('后端适配器', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '选中节点变化为:后端适配器' }).nth(1)).toBeVisible()
})

test('节点被折叠时触发的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-node-collapse')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '节点-指南被关闭了' })).toBeVisible()
})


test('节点被展开时触发的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-node-expand')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '节点-指南被打开了' })).toBeVisible()
})


test('节点选中状态发生变化时的回调', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-check-change')

  const checkBox = page.getByRole('treeitem', { name: '首页' }).locator('span').nth(2)

  // 选中节点
  await checkBox.click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '节点-首页被选中了' })).toBeVisible()

  // 取消选中
  await checkBox.click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '节点-首页被取消了' })).toBeVisible()
})
