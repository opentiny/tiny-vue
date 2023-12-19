import { test, expect } from '@playwright/test'

test('拖拽事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#drag-events')
  await page.getByRole('treeitem', { name: '开发指南' }).getByRole('img').click()
  await page.getByRole('treeitem', { name: '引入组件' }).locator('div').nth(3).click()
  const dragNode = page.getByRole('treeitem', { name: '引入组件' }).locator('div').nth(3).boundingBox()
  // 开始拖拽
  const { x, y } = await dragNode
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y - 50)
  await page.mouse.move(x, y - 100)
  await page.mouse.up()
  await expect(page.locator('.tiny-notify').filter({ hasText: '拖拽节点后的事件' })).toBeHidden()
  await expect(page.locator('.tiny-notify').filter({ hasText: '拖拽结束时触发的事件' })).toBeHidden()
})
