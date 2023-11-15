import { test, expect } from '@playwright/test'

test('拖拽节点事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#drag-events')

  const tree = page.locator('#preview .tiny-tree')
  const draggedDom = tree.locator('.tiny-tree-node').nth(3)
  // 获取拖拽元素位置
  const { x, y } = await draggedDom.boundingBox()

  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y - 15)
  await page.mouse.move(x, y - 15)
  await page.mouse.move(x, y - 15)
  await expect(page.getByText('拖拽节点开始时触发的事件').first()).toBeVisible()
  await expect(page.getByText('拖拽节点时触发的事件').first()).toBeVisible()
  await expect(page.getByText('拖拽离开节点时触发的事件').first()).toBeVisible()
  await expect(page.getByText('拖拽进入其他节点时触发的事件').first()).toBeVisible()
  await page.mouse.up()
  await expect(page.getByText('拖拽结束时触发的事件').first()).toBeVisible()
})
