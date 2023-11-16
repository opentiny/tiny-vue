import { test, expect } from '@playwright/test'

test('[DatePicker] 测试日期格式化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#format')
  const dateInputDefault = page.getByRole('textbox', { name: '2023 年 05 月 20 日' })
  const dateInputTimestamp = page.getByRole('textbox', { name: '2020 年 5 月 20 日 0 时 0 分钟 0 秒 AM' })
  const dateInputString = page.getByRole('textbox', { name: '2020 年 05 月 20 日' })

  await page.getByRole('textbox', { name: '2023 年 05 月 24 日' }).click()
  await page.getByRole('cell', { name: '20' }).getByText('20').click()
  await expect(dateInputDefault).toBeVisible()

  await page.getByRole('textbox', { name: '2020 年 5 月 22 日 0 时 0 分钟 0 秒 AM' }).click()
  await page.getByRole('cell', { name: '20' }).getByText('20').nth(1).click()
  await expect(dateInputTimestamp).toBeVisible()

  await page.getByRole('textbox', { name: '2020 年 05 月 22 日' }).click()
  await page.getByRole('cell', { name: '20' }).getByText('20').nth(1).click()
  await expect(dateInputString).toBeVisible()
})
