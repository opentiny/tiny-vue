import { test, expect } from '@playwright/test'

test('拖拽菜单回调事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-allow-draggable')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  const node = treeMenu.getByTitle('首页')

  const { x: x0, y: y0 } = await node.boundingBox()
  await page.mouse.move(x0, y0)
  await page.mouse.down()
  await page.mouse.move(x0, y0 + 10)
  await expect(page.getByText('拖拽节点开始时触发的事件').first()).toBeVisible()
  await page.mouse.move(x0, y0 + 80)
  await page.mouse.up()
  await expect(page.getByText('拖拽结束时触发的事件').first()).toBeVisible()
})
