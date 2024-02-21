import { test, expect } from '@playwright/test'

test('拖拽节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#draggable')
  const dragNode = await page
    .locator('div')
    .filter({ hasText: /^其他组件$/ })
    .nth(3)
    .boundingBox()
  const dragToNode = await await page
    .locator('div')
    .filter({ hasText: /^表单组件$/ })
    .nth(3)
    .boundingBox()
  // 开始拖拽
  const { x, y } = await dragNode
  const { x: dragToNodeX, y: dragToNodeY } = await dragToNode
  // 移动事件
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(dragToNodeX, dragToNodeY)
  await page.mouse.up()
  await expect(page.getByRole('treeitem', { name: '其他组件', exact: true }).locator('div').nth(3)).toContainText(
    /^其他组件$/
  )
})
