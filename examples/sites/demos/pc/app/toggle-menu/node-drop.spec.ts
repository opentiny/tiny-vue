import { test, expect } from '@playwright/test'

test('拖放节点事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#node-drop')
  const preview = page.locator('#preview')
  const dragNode = preview
    .getByRole('treeitem', { name: '开发指南' })
    .locator('div')
    .filter({ hasText: '开发指南' })
    .first()
  const dragToNode = preview
    .getByRole('treeitem', { name: '数据组件' })
    .locator('div')
    .filter({ hasText: '数据组件' })
    .first()
  // 开始拖拽
  await dragNode.hover()
  await page.mouse.down()
  await dragToNode.hover()
  await page.mouse.up()
  await expect(page.locator('.tiny-modal').filter({ hasText: '拖放节点后的事件' })).toBeVisible()
})
