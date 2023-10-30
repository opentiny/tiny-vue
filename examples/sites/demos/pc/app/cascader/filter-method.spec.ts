import { test, expect } from '@playwright/test'

test('自定义搜索逻辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#filter-method')
  await page.getByPlaceholder('试试搜索：安装').click()
  await page.getByPlaceholder('试试搜索：安装').fill('安装')
  await page
    .getByRole('listitem')
    .filter({ hasText: /^指南\/安装$/ })
    .click()
  const text = await page.locator('#preview').getByRole('textbox').inputValue()
  await expect(text).toEqual('指南/安装')
})
