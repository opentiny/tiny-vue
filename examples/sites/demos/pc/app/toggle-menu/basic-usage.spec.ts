import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#basic-usage')
  await page.getByRole('treeitem', { name: '开发指南' }).getByRole('img').click()
  await page.getByRole('treeitem', { name: '表单组件', exact: true }).getByRole('img').click()
  await page.getByRole('treeitem', { name: '数据组件', exact: true }).getByRole('img').click()
  await page.getByRole('treeitem', { name: '其他组件', exact: true }).getByRole('img').click()
  await page.locator('#basic-usage').getByRole('textbox', { name: '请输入内容进行筛选' }).click()
  await page.locator('#basic-usage').getByRole('textbox', { name: '请输入内容进行筛选' }).fill('组件')
  await page.locator('#basic-usage').getByRole('textbox', { name: '请输入内容进行筛选' }).fill('')
  await page.locator('#basic-usage').getByRole('textbox', { name: '请输入内容进行筛选' }).fill('按钮')
  await page.locator('#basic-usage').getByRole('textbox', { name: '请输入内容进行筛选' }).fill('')
})
