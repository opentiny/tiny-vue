import { test, expect } from '@playwright/test'

test('当前选中节点变化事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-current-change')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '选中节点变化为:指南' }).nth(1)).toBeVisible()
  await treeMenu.getByTitle('后端适配器', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '选中节点变化为:后端适配器' }).nth(1)).toBeVisible()
})
