import { test, expect } from '@playwright/test'

test('get-menu-data-sync 同步获取数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#get-menu-data-sync')

  await page.getByTitle('指南', { exact: true }).click()
  await expect(page.getByTitle('引入组件')).toBeVisible()
  await expect(page.getByRole('treeitem', { name: '按需引入' })).not.toBeVisible()
  await page.getByTitle('引入组件').click()
  await expect(page.getByRole('treeitem', { name: '按需引入' }).first()).toBeVisible()
  await page.getByTitle('指南', { exact: true }).click()
  await expect(page.getByTitle('按需引入')).not.toBeVisible()
  await expect(page.getByTitle('组件', { exact: true })).toBeVisible()
  await expect(page.getByTitle('规范')).toBeVisible()
})
