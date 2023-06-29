import { expect, test } from '@playwright/test'

test('[DatePicker] 测试其他日期单位', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/other-picker-type')
  const dateInputWeek = page.getByPlaceholder('选择周')
  const dateInputYear = page.getByPlaceholder('选择年')
  const dateInputMonth = page.getByPlaceholder('选择月')
  const dateInputMultiDate = page.getByPlaceholder('选择一个或多个日期')

  await page.getByPlaceholder('选择周').click()
  await page.getByRole('cell', { name: '12' }).getByText('12').click()
  expect(await dateInputWeek.inputValue()).toBe('2023 第 19 周')

  await page.getByPlaceholder('选择年').click()
  await page.getByRole('cell', { name: '2022' }).getByText('2022').click()
  expect(await dateInputYear.inputValue()).toBe('2022')

  await page.getByPlaceholder('选择月').click()
  await page.getByRole('cell', { name: '六月' }).getByText('六月').click()
  expect(await dateInputMonth.inputValue()).toBe('2023-06')

  await page.getByPlaceholder('选择一个或多个日期').click()
  await page.getByRole('cell', { name: '16' }).getByText('16').click()
  await page.getByRole('cell', { name: '18' }).getByText('18').click()
  await page.getByRole('cell', { name: '20' }).getByText('20').click()
  await page.getByRole('button', { name: '确定' }).click()
  expect(await dateInputMultiDate.inputValue()).toBe('2023-05-16, 2023-05-18, 2023-05-20')
})