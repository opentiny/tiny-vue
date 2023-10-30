import { test, expect } from '@playwright/test'

test('固定时间范围', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#range-placeholder')
  const timeInput = page.getByPlaceholder('起始时间')
  await timeInput.click()
  await page.getByText('09:30').nth(1).click()
  expect(await page.getByPlaceholder('起始时间').getAttribute('title')).toEqual('09:30')

  const timeEnd = page.getByPlaceholder('结束时间')
  await timeEnd.click()
  await page.getByText('10:00').nth(1).click()
  expect(await page.getByPlaceholder('结束时间').getAttribute('title')).toEqual('10:00')

  //   //   手动输入
  await page.getByPlaceholder('起始时间').fill('08:45')
  expect(await page.getByPlaceholder('起始时间').getAttribute('title')).toEqual('08:45')

  await page.getByPlaceholder('结束时间').fill('09:45')
  expect(await page.getByPlaceholder('结束时间').getAttribute('title')).toEqual('09:45')
})
