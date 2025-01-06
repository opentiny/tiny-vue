import { test, expect } from '@playwright/test'

test('时间线插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#calendar-timeline-slot')
  const demoPage = page.locator('#calendar-timeline-slot')
  const fixWeek2 = page.getByText('前端周会 2').first()
  const popWeek2 = page.locator('.title').filter({ hasText: '前端周会 2' })
  const fixWeek = page.locator('#calendar-timeline-slot').getByText('节假日 25-28')
  const popWeek = page.locator('.title').filter({ hasText: '节假日 25-28' })
  // 校验固定内容
  await expect(demoPage).toHaveText(/15前端周会 2前端周会 2-1前端周会/)
  await expect(demoPage).toHaveText(/16前端周会 4前端周会/)
  await expect(demoPage).toHaveText(/25节假日 25-28前端周会/)
  await expect(demoPage.locator('.events-end').first()).toHaveClass(/bg-green/)
  // 校验 hover 弹出框
  await fixWeek2.hover()
  await page.waitForTimeout(100)
  await expect(popWeek2).toBeVisible()
  await fixWeek.hover()
  await page.waitForTimeout(100)
  await expect(popWeek).toBeVisible()
})
