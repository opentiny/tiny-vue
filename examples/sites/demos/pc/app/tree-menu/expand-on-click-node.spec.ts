import { test, expect } from '@playwright/test'

test('点击文字展开菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#expand-on-click-node')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await expect(treeMenu.getByTitle('后端适配器')).toBeVisible()
})
