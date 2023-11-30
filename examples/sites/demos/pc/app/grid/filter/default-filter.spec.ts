import { test, expect } from '@playwright/test'

test('表格过滤', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-default-filter')
  await page
    .getByRole('cell', { name: '公司名称鼠标移入可以动态提示tooltip，公司名称鼠标移入可以动态提示tooltip' })
    .getByRole('img')
    .first()
    .click()
  await page.getByTitle('WWW科技YX公司').click()
  await page
    .locator('div')
    .filter({ hasText: /^确定取消$/ })
    .getByRole('button', { name: '确定' })
    .click()
  await expect(page.getByRole('cell', { name: 'RFV有限责任公司' })).toHaveCount(0)
  await expect(page.getByRole('cell', { name: 'WWW科技YX公司' })).toHaveCount(1)

  // 清楚筛选
  await page.getByRole('button', { name: '清空表格name字段的过滤条件' }).click()
  await expect(page.getByRole('cell', { name: 'RFV有限责任公司' })).toHaveCount(1)
})
