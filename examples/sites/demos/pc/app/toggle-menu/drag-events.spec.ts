import { test, expect } from '@playwright/test'

test('拖拽事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#drag-events')
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
  await expect(page.locator('.tiny-notify').filter({ hasText: '拖拽节点后的事件' })).toBeVisible()
  await expect(
    page.locator('.tiny-notify').filter({ hasText: '拖拽进入某个节点（包含自身节点）时触发的事件' })
  ).toBeVisible()
  await expect(
    page.locator('.tiny-notify').filter({ hasText: '拖拽经过某个节点（包含自身节点）时触发的事件' })
  ).toBeVisible()
  await expect(page.locator('.tiny-notify').filter({ hasText: '拖拽结束时触发的事件' })).toBeVisible()
})
