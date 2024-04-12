import { test, expect } from '@playwright/test'

test('[DatePicker] 测试选择器打开时默认时间设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#default-value')

  // default-value: 打开日期面板，默认显示的日期
  await page.getByRole('textbox').nth(1).click()
  await expect(page.getByRole('button', { name: '2000 年' })).toBeVisible()
  await expect(page.getByRole('button', { name: '11 月' })).toBeVisible()

  // default-time: 日期时间(范围)，选择日期之后默认显示的时间(范围)
  const dateInputDefaultTime = page.getByRole('textbox').nth(2)
  await dateInputDefaultTime.fill('2023-05-20 09:00:00')
  await dateInputDefaultTime.press('Enter')

  await page.getByRole('textbox', { name: '2023-05-20 09:00:00' }).click()
  await page.getByRole('cell', { name: '15' }).getByText('15').last().click()
  await expect(page.getByRole('textbox', { name: '选择时间' })).toHaveValue('09:00:00')

  await page.getByRole('textbox').nth(3).click()
  await page.getByRole('cell', { name: '10' }).getByText('10').last().click()
  await page.getByRole('cell', { name: '10' }).getByText('10').nth(1).click()
  await expect(page.getByRole('textbox', { name: '开始时间' })).toHaveValue('09:00:00')
  await expect(page.getByRole('textbox', { name: '结束时间' })).toHaveValue('18:00:00')
})
