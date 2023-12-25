import { test, expect } from '@playwright/test'

test('添加日程事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#dynamic-add-schedule')
  const selectedDay4 = page.getByText('通知事项通知事项A', { exact: true })
  const dayFun4 = page.locator('.tiny-calendar__tip-content').filter({ hasText: '请注意该通知事项A' })

  const selectedDay13 = page.getByRole('listitem').filter({ hasText: '这是一条警告' })
  const dayFun13 = page.locator('.tiny-calendar__tip-content').filter({ hasText: '这是一条警告消息这是一条警告' })

  const selectedDay14 = page.getByRole('listitem').filter({ hasText: '这是一条错误' })
  const datFun14 = page.locator('.tiny-calendar__tip-content').filter({ hasText: '这是一条错误，还有错误' })

  await selectedDay4.hover()
  await page.waitForTimeout(200)
  await expect(dayFun4).toBeVisible()

  await selectedDay13.hover()
  await page.waitForTimeout(200)
  await expect(dayFun13).toBeVisible()

  await selectedDay14.hover()
  await page.waitForTimeout(200)
  await expect(datFun14).toBeVisible()
})
