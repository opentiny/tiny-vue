import { test, expect } from '@playwright/test'

test('[DatePicker] 测试日期范围默认时刻', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/default-time-of-range')
  const startDateDom = page.getByRole('textbox').nth(1)
  const endDateDom = page.getByRole('textbox').nth(2)

  await page.getByRole('textbox').nth(1).click()
  await page.getByRole('row', { name: '14 15 16 17 18 19 20' }).getByText('14').click()
  await page.getByRole('row', { name: '14 15 16 17 18 19 20' }).getByText('20').click()
  await page.getByPlaceholder('开始时间').click()
  await page.locator('li:nth-child(2) > span').first().click()
  await page.locator('div:nth-child(2) > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li:nth-child(2) > span').first().click()
  await page.locator('div:nth-child(3) > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li:nth-child(2) > span').first().click()
  await page.getByRole('button', { name: '确定' }).first().click()
  await page.getByPlaceholder('结束时间').click()
  await page.getByRole('button', { name: '确定' }).last().click()
  expect(await startDateDom.inputValue()).toBe('2023-05-14 01:01:01')
  expect(await endDateDom.inputValue()).toBe('2023-05-20 23:59:59')
})