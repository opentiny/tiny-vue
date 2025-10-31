import { test, expect } from '@playwright/test'

test('合并多选标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#merge-tag')

  const tags = page.locator('.tvp-search-box__tag')

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).click()
  await page.getByTitle('可用地区').click()
  await page.locator('label').filter({ hasText: '全选' }).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('可用地区 : 华南区 | 华北区 | 西北区 | 西南区')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^可用地区$/ })
    .nth(1)
    .click()
  await page.getByTitle('华北区', { exact: true }).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('可用地区 : 华南区 | 西北区 | 西南区')
})
