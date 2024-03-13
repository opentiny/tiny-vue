import { test, expect } from '@playwright/test'

test('日程模式插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#calendar-schedule-slot')
  const solt1 = page.locator('.new-schedule').first()
  const soltData1 = page.getByText('新增事件2023-4-30')
  const solt5 = page.locator('li:nth-child(5) > .new-schedule')
  const soltData5 = page.getByText('新增事件2023-5-4')
  await expect(solt1).toBeVisible()
  await page.waitForTimeout(200)
  await solt1.click()
  await page.waitForTimeout(100)
  await expect(soltData1).toBeVisible()
  await solt5.click()
  await page.waitForTimeout(100)
  await expect(soltData5).toBeVisible()
})
