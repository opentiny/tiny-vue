import { test, expect } from '@playwright/test'

test('测试日期范围选择', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/date-range')
  const startDateDom = page.getByRole('textbox').nth(1)
  const endDateDom = page.getByRole('textbox').nth(2)

  await startDateDom.click()
  await page.getByRole('row', { name: '14 15 16 17 18 19 20' }).getByText('14').click()
  await page.getByRole('row', { name: '14 15 16 17 18 19 20' }).getByText('20').click()
  expect(await startDateDom.inputValue()).toBe('2023-05-14')
  expect(await endDateDom.inputValue()).toBe('2023-05-20')
  await startDateDom.hover()
  await page.locator('#preview').getByRole('img').nth(1).click()
  expect(await startDateDom.inputValue()).not.toBe('2023-05-14')
  expect(await endDateDom.inputValue()).not.toBe('2023-05-20')
})