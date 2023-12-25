import { test, expect } from '@playwright/test'

test('添加日程事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#dynamic-add-schedule')
  const selectedDay4 = page.getByRole('cell', { name: '4 通知事项 通知事项A' }).getByRole('listitem').first()
  const dayFun4 = page.getByRole('tooltip', { name: '2019-9-4 19:42 通知事项 请注意该通知事项' })
  const selectedDay13 = page.getByRole('cell', { name: '13 这是一条警告' }).getByRole('listitem')
  const dayFun13 = page.getByText('这是一条警告').nth(2)
  const selectedDay14 = page.getByRole('listitem').filter({ hasText: '这是一条错误' })
  const datFun14 = page.getByText('这是一条错误').nth(2)

  await selectedDay4.hover()
  await expect(dayFun4).not.toBeDisabled()

  await selectedDay13.hover()
  await expect(dayFun13).not.toBeDisabled()

  await selectedDay14.hover()
  await expect(datFun14).not.toBeDisabled()
})
