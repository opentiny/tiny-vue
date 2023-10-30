import { test, expect } from '@playwright/test'

test('懒加载节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#lazy-load-node')

  const parentNode = page.getByRole('treeitem', { name: '一级 3' }).first()
  const childNode1 = page.getByRole('treeitem', { name: '一级 1' }).first()
  const childNode2 = page.getByRole('treeitem', { name: '一级 2' }).first()

  // 初始没渲染子节点
  await expect(childNode1).not.toBeVisible()
  await expect(childNode2).not.toBeVisible()

  // 展开父元素后才渲染子节点
  await parentNode.click()
  await expect(childNode1).toBeVisible()
  await expect(childNode2).toBeVisible()
})
