import { test, expect } from '@playwright/test'

test('点击节点时选中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#check-on-click-node')

  const checkedClass = /is-checked/
  const someCheckedClass = /is-indeterminate/
  const tree = page.locator('#preview .tiny-tree')
  const leafNode = tree.locator('.tiny-tree-node').nth(2).locator('.tiny-checkbox__input')
  const mediumNode = page.getByRole('treeitem', { name: '二级 1-1' }).locator('.tiny-checkbox__input').nth(0)
  const rootNode = page.getByRole('treeitem', { name: '一级 1' }).locator('span').nth(1)

  // 点击时选中
  await leafNode.click()
  await expect(leafNode).toHaveClass(checkedClass)
  await expect(mediumNode).toHaveClass(someCheckedClass)
  await expect(rootNode).toHaveClass(someCheckedClass)
  await mediumNode.click()
  await expect(mediumNode).toHaveClass(checkedClass)

  // 已选中的点击取消选中
  await rootNode.click()
  await expect(rootNode).not.toHaveClass(checkedClass)
  await expect(mediumNode).not.toHaveClass(checkedClass)
  await expect(leafNode).not.toHaveClass(checkedClass)
  await rootNode.click()
  await leafNode.click()
  await expect(leafNode).not.toHaveClass(checkedClass)
})
