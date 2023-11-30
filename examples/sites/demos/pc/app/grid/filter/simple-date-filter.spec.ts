import { test, expect } from '@playwright/test'

test('简化版筛选面板-时间日期菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-simple-date-filter')
  await page.getByRole('cell', { name: '开始时间' }).getByRole('img').click()
  await page
    .locator('li')
    .filter({
      hasText: '开始日期2023 年11 月日一二三四五六29303112345678910111213141516171819202122232425262728293012'
    })
    .getByRole('textbox')
    .click()
  await page.getByRole('textbox', { name: '选择日期' }).click()
  await page.getByRole('textbox', { name: '选择日期' }).fill('2021-12-03')
  await page.getByRole('textbox', { name: '选择时间' }).click()
  await page.getByRole('button', { name: '确定' }).nth(1).click()
  await page.getByRole('button', { name: '确定' }).nth(1).click()
  await page
    .locator('li')
    .filter({
      hasText: '结束日期2023 年11 月日一二三四五六29303112345678910111213141516171819202122232425262728293012'
    })
    .getByRole('textbox')
    .click()
  await page.getByRole('textbox', { name: '选择日期' }).click()
  await page.getByRole('textbox', { name: '选择日期' }).fill('2023-11-19')
  await page.getByRole('textbox', { name: '选择时间' }).click()
  await page.getByRole('button', { name: '确定' }).nth(1).click()
  await page.getByRole('button', { name: '确定' }).nth(1).click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('cell', { name: 'Elisa Menez' }).getByText('Elisa Menez')).toBeVisible()
})
