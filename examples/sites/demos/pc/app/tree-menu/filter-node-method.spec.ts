import { test, expect } from '@playwright/test'

test('搜索规则配置 精确匹配', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#filter-node-method')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByPlaceholder('请输入内容进行筛选').locator('input').fill('组件')
  await expect(treeMenu.getByRole('group').getByTitle('组件', { exact: true })).toBeVisible()
  await expect(treeMenu.getByTitle('引入组件')).not.toBeVisible()
  await expect(treeMenu.getByTitle('表单组件')).not.toBeVisible()
})
