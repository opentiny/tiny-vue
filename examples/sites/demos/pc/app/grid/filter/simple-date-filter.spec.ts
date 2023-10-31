import { test, expect } from '@playwright/test'

test('简化版筛选面板-时间日期菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-simple-date-filter')
  await page.getByRole('cell', { name: '开始时间' }).getByRole('img').click()
  await page
    .getByRole('listitem')
    .filter({
      hasText: '开始日期2023 年7 月日一二三四五六252627282930123456789101112131415161718192021222324252627282'
    })
    .getByRole('textbox')
    .click()
  await page.getByRole('button', { name: '前一年' }).click()
  await page.getByRole('button', { name: '前一年' }).click()
  await page.getByRole('button', { name: '前一年' }).click()
  await page.getByRole('button', { name: '前一年' }).click()
  await page.getByRole('row', { name: '7 8 9 10 11 12 13' }).getByText('9').click()
  await page.getByRole('button', { name: '确定' }).nth(1).click()
  await page
    .getByRole('listitem')
    .filter({
      hasText: '结束日期2023 年7 月日一二三四五六252627282930123456789101112131415161718192021222324252627282'
    })
    .getByRole('textbox')
    .click()
  await page.getByRole('row', { name: '23 24 25 26 27 28 29' }).getByRole('cell', { name: '26' }).click()
  await page.getByRole('button', { name: '确定' }).nth(1).click()
  await page.getByRole('button', { name: '确定' }).nth(0).click()
  await expect(page.getByRole('cell', { name: 'Elisa Menez' }).getByText('Elisa Menez')).toBeVisible()
})
