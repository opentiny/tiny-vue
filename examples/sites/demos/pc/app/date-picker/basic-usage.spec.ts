import { test, expect } from '@playwright/test'

test('[DatePicker] 测试日期选择和清除', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#basic-usage')

  const dateInput = page.getByPlaceholder('请选择日期').nth(1)

  await page.getByPlaceholder('请选择日期').nth(1).fill('2023-05-20')
  await page.getByPlaceholder('请选择日期').nth(1).press('Enter')
  await expect(dateInput).toHaveValue('2023-05-20')

  // 测试日期选择
  await dateInput.click()
  await page.getByRole('cell', { name: '21' }).getByText('21').click()
  await expect(dateInput).toHaveValue('2023-05-21')
})

test('[DatePicker] 测试上一月/下一月/前一年/后一年', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#basic-usage')

  const dateInput = page.getByPlaceholder('请选择日期').nth(1)

  // 先输入一个日期，确保后续选中的月份、年份正确
  await page.getByPlaceholder('请选择日期').nth(1).fill('2023-05-20')
  await page.getByPlaceholder('请选择日期').nth(1).press('Enter')

  // 下一月/后一年
  await dateInput.click()
  await page.getByRole('button', { name: '下个月' }).click()
  await page.getByRole('row', { name: '4 5 6 7 8 9 10' }).getByText('4').click()
  await expect(dateInput).toHaveValue('2023-06-04')

  await dateInput.click()
  await page.getByRole('button', { name: '后一年' }).click()
  await page.getByRole('cell', { name: '10' }).getByText('10').click()
  await expect(dateInput).toHaveValue('2024-06-10')

  // 前一年/上一月
  await dateInput.click()
  await page.getByRole('button', { name: '前一年' }).click()
  await page.getByRole('cell', { name: '11' }).getByText('11').click()
  await expect(dateInput).toHaveValue('2023-06-11')

  await dateInput.click()
  await page.getByRole('button', { name: '上个月' }).click()
  await page.getByRole('cell', { name: '14' }).getByText('14').click()
  await expect(dateInput).toHaveValue('2023-05-14')
})

test('[DatePicker] 测试月份/年份选择', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#basic-usage')

  const dateInput = page.getByPlaceholder('请选择日期').nth(1)

  // 先输入一个日期，确保后续选中的月份、年份正确
  await page.getByPlaceholder('请选择日期').nth(1).fill('2023-04-20')
  await page.getByPlaceholder('请选择日期').nth(1).press('Enter')

  // 选择月份
  await dateInput.click()
  await page.getByRole('button', { name: '4 月' }).click()
  await page.getByText('六月').click()
  await page.getByRole('row', { name: '4 5 6 7 8 9 10' }).getByText('4').click()
  await expect(dateInput).toHaveValue('2023-06-04')

  // 选择年份
  await dateInput.click()
  await page.getByRole('button', { name: '2023 年' }).click()
  await page.getByRole('cell', { name: '2024' }).getByText('2024').click()
  await page.getByText('二月', { exact: true }).click()
  await page.getByRole('row', { name: '4 5 6 7 8 9 10' }).getByText('7').click()
  await expect(dateInput).toHaveValue('2024-02-07')
})
