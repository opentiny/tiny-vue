import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#dynamic-add-schedule')
  const pcDemo = page.locator('.pc-demo')
  const day4 = pcDemo.getByRole('cell', { name: '4 通知事项 通知事项A' }).getByText('通知事项').first()
  await expect(day4).toHaveClass('tiny-tooltip event info tiny-calendar__tip')
  const day13 = pcDemo.getByRole('cell', { name: '13 这是一条警告' }).getByText('这是一条警告')
  await expect(day13).toHaveClass('tiny-tooltip event warning tiny-calendar__tip')
  const day14 = pcDemo.getByRole('cell', { name: '14 这是一条错误 这是一条普通通知' }).getByText('这是一条错误')
  await expect(day14).toHaveClass('tiny-tooltip event error tiny-calendar__tip')
})
