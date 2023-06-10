import { test, expect } from '@playwright/test'

test('节点可勾选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree-menu/show-checkbox')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  const node = treeMenu.getByRole('treeitem', { name: '首页' })
  const selectedClass = /is-checked/
  await expect(node.locator('.tiny-tree-node__content .tiny-checkbox')).toBeVisible()
  await page.getByRole('treeitem', { name: '首页' }).locator('span').nth(2).click()
  await expect(node).toHaveClass(/is-current/)
  await expect(node.locator('.tiny-tree-node__content .tiny-checkbox')).toHaveClass(selectedClass)

  // 父级选中, 子孙节点同时都选中
  await page.getByRole('treeitem', { name: '指南', exact: true }).locator('span').nth(2).click()
  await treeMenu.getByRole('treeitem', { name: '指南' }).click()
  await expect(treeMenu.getByRole('treeitem', { name: '引入组件' }).locator('.tiny-checkbox')).toHaveClass(selectedClass)
  await expect(treeMenu.getByRole('treeitem', { name: '后端适配器' }).locator('.tiny-checkbox')).toHaveClass(selectedClass)
  await treeMenu.getByRole('treeitem', { name: '引入组件' }).click()
  await expect(treeMenu.getByRole('treeitem', { name: '按需引入' }).locator('.tiny-checkbox')).toHaveClass(selectedClass)

  // 子节点取消勾选, 祖先节点改变勾选状态
  await page.getByRole('treeitem', { name: '按需引入' }).locator('span').nth(2).click()
  await expect(treeMenu.getByRole('treeitem', { name: '引入组件' }).locator('.tiny-checkbox__input').first()).toHaveClass(/is-indeterminate/)
  await expect(treeMenu.getByRole('treeitem', { name: '指南' }).locator('.tiny-checkbox__input').first()).toHaveClass(/is-indeterminate/)
  await page.getByRole('treeitem', { name: '完整引入' }).locator('span').nth(2).click()
  await expect(treeMenu.getByRole('treeitem', { name: '引入组件' }).locator('.tiny-checkbox__input').first()).not.toHaveClass(/is-indeterminate/)
})