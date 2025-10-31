import { test, expect } from '@playwright/test'

test('时间长度限制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#max-time-length')

  const tags = page.locator('.tvp-search-box__tag')

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^日期$/ })
    .nth(1)
    .click()
  await page.getByRole('textbox').nth(3).click()
  await page.getByRole('button', { name: '下个月' }).click()
  await page.getByRole('cell', { name: '12' }).locator('div').click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags).toHaveCount(0)

  await page.getByText('可选时间跨度为366.0天内').isVisible
  await page.getByTitle('值不能为空').isVisible
  await page.getByRole('textbox').nth(3).click()
  await page.getByRole('cell', { name: '11' }).locator('span').click()
  await page.getByRole('button', { name: '确认' }).click()

  await expect(tags.last()).toHaveText('日期 : 2024/04/10-2025/04/11')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page.getByTitle('时间日期').click()
  await page.getByRole('textbox').nth(2).click()
  await page.getByText('1', { exact: true }).nth(2).click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.getByRole('textbox').nth(3).click()
  await page.getByRole('button', { name: '下个月' }).last().click()
  await page.getByRole('button', { name: '下个月' }).last().click()
  await page.getByRole('button', { name: '下个月' }).last().click()
  await page.getByRole('button', { name: '下个月' }).last().click()
  await page.getByRole('button', { name: '下个月' }).last().click()
  await page.getByRole('button', { name: '下个月' }).last().click()
  await page.getByText('2', { exact: true }).nth(2).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags).toHaveCount(1)

  await page.getByText('可选时间跨度为182.5天内').isVisible
  await page.getByTitle('值不能为空').isVisible
  await page.getByRole('textbox').nth(3).click()
  await page.getByRole('button', { name: '上个月' }).click()
  await page.getByRole('rowgroup').getByText('30').nth(1).click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('时间日期 : 2025/03/01 00:00:00-2025/08/30 00:00:00')
})
