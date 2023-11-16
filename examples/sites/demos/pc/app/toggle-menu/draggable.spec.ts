import { test, expect } from '@playwright/test'

test('拖拽节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#draggable')
  const preview = page.locator('#preview')
  const nodes = preview.locator('.tiny-toggle-menu .tiny-tree > div')
  const dragNode = preview.getByText('更新日志')
  const dragToNode = preview
    .getByRole('treeitem', { name: '表单组件' })
    .locator('div')
    .filter({ hasText: '表单组件' })
    .first()
  // 开始拖拽
  await dragNode.hover()
  await page.mouse.down()
  await dragToNode.hover()
  await page.mouse.up()
  // 展开子菜单
  await dragToNode.click()
  // “更新日志”应该在“表单组件”下可以找到
  await expect(nodes.nth(1).locator('.tiny-toggle-menu__name').filter({ hasText: '更新日志' })).toHaveCount(1)
})
