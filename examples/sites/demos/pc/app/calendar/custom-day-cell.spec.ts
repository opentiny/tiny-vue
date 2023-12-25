import { test, expect } from '@playwright/test'

test('自定义日期单元格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#custom-day-cell')
  const selectedDay4 = page.getByRole('cell', { name: '4' }).locator('div').first()
  const selectedDay13 = page.getByRole('cell', { name: '13' }).locator('div').first()
  const selectedDay14 = page.getByRole('cell', { name: '14' }).locator('div').first()
  await expect(selectedDay4).toHaveText(/通知事项/)
  await expect(selectedDay13).toHaveText(/这是一条警告/)
  await expect(selectedDay14).toHaveText(/这是一条错误/)
})
