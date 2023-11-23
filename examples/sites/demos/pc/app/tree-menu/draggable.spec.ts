import { test, expect } from '@playwright/test'

test('拖动菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#can-draggable')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  const node = treeMenu.getByTitle('首页')

  // 同一层次节点拖拽
  const { x: x0, y: y0 } = await node.boundingBox()

  await page.mouse.move(x0, y0)
  await page.mouse.down()
  await page.mouse.move(x0, y0 + 80)
  await page.mouse.up()

  // 判断位置是否变化
  const { x: x1, y: y1 } = await node.boundingBox()
  expect(y1).toBeGreaterThan(y0)

  // 拖拽进到兄弟节点成为其子节点
  await page.mouse.move(x1, y1)
  await page.mouse.down()
  await page.mouse.move(x1, y1 - 20)
  await page.mouse.up()

  // 判断是否放到兄弟节点内
  await treeMenu.getByTitle('指南').click()
  await expect(treeMenu.getByRole('treeitem', { name: '指南' }).getByRole('treeitem', { name: '首页' })).toBeVisible()

  // 拖拽到父节点同级
  const { x: x2, y: y2 } = await node.boundingBox()

  await page.mouse.move(x2, y2)
  await page.mouse.down()
  await page.mouse.move(x2, y2 + 80)
  await page.mouse.up()
  await expect(treeMenu.getByRole('treeitem', { name: '指南' }).getByRole('treeitem', { name: '首页' })).toBeVisible()
})
