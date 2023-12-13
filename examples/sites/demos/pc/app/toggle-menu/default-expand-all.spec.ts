import { test, expect } from '@playwright/test'

test('默认展开所有节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#default-expand-all')
  // 关闭所有的节点
  await page.getByRole('treeitem', { name: '开发指南' }).getByRole('img').click()
  await page.getByRole('treeitem', { name: '表单组件', exact: true }).getByRole('img').click()
  await page.getByRole('treeitem', { name: '数据组件', exact: true }).getByRole('img').click()
  await page.getByRole('treeitem', { name: '其他组件', exact: true }).getByRole('img').click()
})
