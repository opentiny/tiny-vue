import { test, expect } from '@playwright/test'

test('简化版筛选面板-单选/多选菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-simple-filter')
  await page.getByRole('cell', { name: '公司名称' }).getByRole('img').click()

  // 筛选面板搜索功能
  await page.getByRole('textbox').nth(1).click()
  await page.getByRole('textbox').nth(1).fill('a')
  await expect(page.getByRole('listitem').filter({ hasText: '暂无数据' })).toBeVisible()
  await page.getByRole('textbox').nth(1).click()
  await page.getByRole('textbox').nth(1).fill('')
  await page.getByTitle('GFD科技YX公司').click()
  await page.getByTitle('WWW科技YX公司').click()

  // 执行筛选
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('cell', { name: '深圳市福德宝网络技术YX公司' })).toHaveCount(0)
})
