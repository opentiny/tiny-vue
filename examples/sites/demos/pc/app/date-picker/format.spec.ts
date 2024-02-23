import { test, expect } from '@playwright/test'

test('[DatePicker] 测试日期格式化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#format')

  // format: 日期输入框中显示的格式
  await page.getByRole('textbox', { name: '2023 年 05 月 24 日' }).first().click()
  await page.getByRole('cell', { name: '20' }).getByText('20').click()
  await expect(page.getByRole('textbox', { name: '2023 年 05 月 20 日' }).first()).toBeVisible()

  // time-format: 时间输入框中显示的格式
  await page.locator('.tiny-date-editor input').nth(1).click()
  await page.getByRole('row', { name: '21 22 23 24 25 26 27' }).getByText('24').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.locator('.tiny-date-editor input').nth(1)).toHaveValue('2023 年 05 月 24 日 08 时 00 分 00 秒')

  // value-format: 选中值的格式
  await page.locator('.tiny-date-editor input').nth(2).click()
  await page.getByRole('cell', { name: '20' }).getByText('20').click()
  await expect(page.locator('.select-date')).toHaveText(`当前选中时间：${1589904000000}`)
})
