import { test, expect } from '@playwright/test'

test('添加日程事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#dynamic-add-schedule')

  const selectedDay4 = page.getByText('通知事项通知事项A', { exact: true })
  const dayFun4 = page.locator('.tiny-calendar__tip-content').filter({ hasText: '请注意该通知事项A' })

  await selectedDay4.hover()
  await page.waitForTimeout(200)
  await expect(dayFun4).toBeVisible()
})
