import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#basic-usage')
  const timeInput = page.getByPlaceholder('选择时间')
  await timeInput.click()
  await page.getByText('10:00').click()
  expect(await page.getByPlaceholder('选择时间').getAttribute('title')).toEqual('10:00')

  //   手动输入
  await page.getByPlaceholder('选择时间').fill('9:00')
  expect(await page.getByPlaceholder('选择时间').getAttribute('title')).toEqual('9:00')
})
