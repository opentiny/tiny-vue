import { test, expect } from '@playwright/test'

test('输入长度限制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#max-length')

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).fill('123456789')
  await page.locator('div').filter({ hasText: '不能超过8个字符' }).nth(1).isVisible

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).fill('')
  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).click()
  await page.getByRole('listitem').locator('div').nth(1).locator('visible=true').click()
  await page.getByRole('textbox', { name: '请选择名称搜索' }).fill('123456789')
  await page.locator('div').filter({ hasText: '不能超过8个字符' }).nth(2).isVisible
})
