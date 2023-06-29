import { test, expect } from '@playwright/test'

// 将日期格式化为 YYYY-MM-DD 格式
const formatDate = date => date.toISOString().slice(0, 10)

test('[DatePicker] 测试日期范围快捷选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/date-range-shortcuts')
  const dateInputStartDate = page.getByRole('textbox').nth(1)
  
  // 最近一周
  const startDateWeek = new Date()
  startDateWeek.setTime(startDateWeek.getTime() - 3600 * 1000 * 24 * 7)

  // 最近一个月
  const startDateMonth = new Date()
  startDateMonth.setTime(startDateMonth.getTime() - 3600 * 1000 * 24 * 30)

  // 最近三个月
  const startDateThreeMonth = new Date()
  startDateThreeMonth.setTime(startDateThreeMonth.getTime() - 3600 * 1000 * 24 * 90)

  await dateInputStartDate.click()
  await page.getByRole('button', { name: '最近一周' }).click()
  expect(await dateInputStartDate.inputValue()).toBe(formatDate(startDateWeek))

  await dateInputStartDate.click()
  await page.getByRole('button', { name: '最近一个月' }).click()
  expect(await dateInputStartDate.inputValue()).toBe(formatDate(startDateMonth))

  await dateInputStartDate.click()
  await page.getByRole('button', { name: '最近三个月' }).click()
  expect(await dateInputStartDate.inputValue()).toBe(formatDate(startDateThreeMonth))
})