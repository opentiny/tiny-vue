import { test, expect } from '@playwright/test'

test('可搜索', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#filterable')
  await page.getByRole('textbox', { name: '试试搜索：安装' }).click()
  await page.getByRole('textbox', { name: '试试搜索：安装' }).fill('安装')
  await page.waitForTimeout(1000)
  const text = await page.locator('.tiny-cascader__suggestion-item')
  await expect(text).toHaveText([
    '指南/安装/项目登记',
    '指南/安装/环境准备',
    '指南/安装/安装 CLI',
    '指南/安装/创建项目'
  ])
})
