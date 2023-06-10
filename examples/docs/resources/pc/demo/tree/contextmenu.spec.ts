import { test, expect } from '@playwright/test';

test('可自定义右键菜单内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/contextmenu')

  await page.getByRole('treeitem', { name: '三级 1-1-1' }).click({
    button: 'right'
  })
  const menu = page.locator('#preview .tiny-tree-node__menu')
  await expect(menu).toBeVisible()
  await page.getByText('新增 三级 1-1-1删除 { "label": "三级 1-1-1" }更新 三级 1-1-1').click()
});