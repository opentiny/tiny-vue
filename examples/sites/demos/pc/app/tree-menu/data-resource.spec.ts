import { test, expect } from '@playwright/test'

test('绑定数据源', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#data-resource')

  await page.getByTitle('指南', { exact: true }).click()
  await expect(page.getByTitle('后端适配器')).toBeVisible()
  await page.getByTitle('后端适配器').click()
  await expect(page.getByRole('treeitem', { name: '后端适配器' }).first()).toHaveClass(/is-current/)
  await page.getByTitle('指南', { exact: true }).click()
  await expect(page.getByTitle('后端适配器')).not.toBeVisible()

  // 过滤功能
  await page.locator('#preview').getByPlaceholder('请输入内容进行筛选').locator('input').fill('添加标签页')
  await expect(page.getByTitle('添加标签页')).toBeVisible()
  await expect(page.getByTitle('指南', { exact: true })).not.toBeVisible()
  await page.locator('#preview').getByPlaceholder('请输入内容进行筛选').locator('input').clear()
  await expect(page.getByTitle('指南', { exact: true })).toBeVisible()
})
