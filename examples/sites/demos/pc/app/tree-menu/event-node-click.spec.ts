import { test, expect } from '@playwright/test'

test('节点被点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-node-click')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('首页', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '节点-首页被点击了' }).nth(1)).toBeVisible()
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '节点-指南被点击了' }).nth(1)).toBeVisible()
  await treeMenu.getByTitle('后端适配器', { exact: true }).click()
  await expect(page.locator('div').filter({ hasText: '节点-后端适配器被点击了' }).nth(1)).toBeVisible()
})
