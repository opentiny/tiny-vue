import { test, expect } from '@playwright/test'

test('自定义节点能否被拖拽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#allow-drag')

  const draggedDom = page.locator('#preview .tiny-tree').getByText('三级 1-1-2')
  // 获取拖拽元素位置
  const { x, y } = await draggedDom.boundingBox()

  // 开始拖拽
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y + 55)
  await page.mouse.up()

  // 拖拽完成, 判断不可拖拽节点位置是否没变化
  const { x: finalX, y: finalY } = await draggedDom.boundingBox()
  await expect(x).toEqual(finalX)
  await expect(y).toEqual(finalY)
})
