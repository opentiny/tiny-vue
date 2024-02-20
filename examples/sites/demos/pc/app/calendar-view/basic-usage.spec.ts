import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#basic-usage')
  const demoPage = page.locator('#basic-usage')
  const fixWeek2 = page.getByText('前端周会2').first()
  const popWeek2 = page.locator('.title').filter({ hasText: '前端周会2' })
  // 校验固定内容
  await expect(demoPage).toHaveText(/15前端周会2前端周会2-1前端周会1/)
  await expect(demoPage).toHaveText(/16前端周会4前端周会3/)
  await expect(demoPage).toHaveText(/25节假日25-28前端周会5/)
  await expect(demoPage.locator('.events-end').first()).toHaveClass(/bg-green/)
  // 校验hover弹出框
  await fixWeek2.hover()
  await page.waitForTimeout(200)
  await expect(popWeek2).toBeVisible()
})
