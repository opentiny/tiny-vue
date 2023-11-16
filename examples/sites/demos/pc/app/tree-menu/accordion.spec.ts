import { test, expect } from '@playwright/test'

test('手风琴', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#accordion')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('指南').click()
  await expect(treeMenu.getByTitle('引入组件')).toBeVisible()
  await expect(treeMenu.getByTitle('构建部署')).toBeVisible()
  await treeMenu.getByTitle('引入组件').click()
  await expect(treeMenu.getByTitle('按需引入')).toBeVisible()
  await expect(treeMenu.getByTitle('完整引入')).toBeVisible()
  await treeMenu.getByTitle('指南').click()
  await expect(treeMenu.getByTitle('引入组件')).not.toBeVisible()
  await expect(treeMenu.getByTitle('完整引入')).not.toBeVisible()
})
