import { test, expect } from '@playwright/test'

test('默认展开全部菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#default-expand-all')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await expect(treeMenu.getByTitle('首页')).toBeVisible()
  await expect(treeMenu.getByTitle('组件').first()).toBeVisible()
  await expect(treeMenu.getByTitle('引入组件')).toBeVisible()
  await expect(treeMenu.getByRole('link', { name: 'Button 按钮' })).toBeVisible()
  await expect(treeMenu.getByTitle('教程')).toBeVisible()
  await expect(treeMenu.getByTitle('页面布局')).toBeVisible()
  await expect(treeMenu.getByTitle('列表属性配置')).toBeVisible()
})
