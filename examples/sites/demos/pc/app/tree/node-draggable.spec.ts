import { test, expect } from '@playwright/test'

test('可拖拽节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#node-draggable')

  const tree = page.locator('#preview .tiny-tree')
  const draggedDom = tree.locator('.tiny-tree-node').nth(3)
  // 获取拖拽元素位置
  const { x, y } = await draggedDom.boundingBox()

  // 1. 兄弟节点之间交换位置
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y - 30)
  await page.mouse.up()
  // 拖拽完成判断位置是否变化
  await expect(tree.locator('.tiny-tree-node').nth(2).locator('.tiny-tree-node__content')).toContainText('1-1-2')

  // 2. 拖拽兄弟节点跨层级
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y + 30)
  await page.mouse.up()
  // 判断新的子节点和父节点的位置
  await expect(tree.locator('.tiny-tree-node').nth(3)).toContainText('1-1-1')
})
