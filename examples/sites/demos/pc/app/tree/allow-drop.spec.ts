import { test, expect } from '@playwright/test'

test('自定义节点能否被拖拽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#allow-drop')

  const tree = page.locator('#preview .tiny-tree')
  const draggedDom = tree.getByText('二级 3-2')
  // 获取拖拽元素位置
  const { x, y } = await draggedDom.boundingBox()

  // 拖拽到不可放置子节点的元素上
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y - 55)
  await page.mouse.up()

  // 拖拽完成判断目标节点有没有增加子节点
  await expect(tree.getByText('二级 3-1').locator('.tiny-tree-node__children .tiny-tree-node')).toHaveCount(0)
})
