import { test, expect } from '@playwright/test'

test('自定义搜索逻辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#filter-method')
  await page.getByRole('textbox', { name: '试试搜索：安装' }).click()
  await page.getByRole('textbox', { name: '试试搜索：安装' }).fill('安装')
  await page
    .getByRole('listitem')
    .filter({ hasText: /^指南\/安装$/ })
    .click()
  const text = await page.getByRole('textbox', { name: '试试搜索：安装' }).inputValue()
  await expect(text).toEqual('指南/安装')
})
