import { test, expect } from '@playwright/test'

test('自定义日期单元格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#custom-day-cell')
  const selectedDay4 = page.getByText('4通知事项通知事项A')
  const selectedDay13 = page.getByText('13这是一条警告')
  const selectedDay14 = page.getByText('14这是一条错误这是一条普通通知')
  await expect(selectedDay4).toHaveText(/通知事项/)
  await expect(selectedDay13).toHaveText(/这是一条警告/)
  await expect(selectedDay14).toHaveText(/这是一条错误/)
})
