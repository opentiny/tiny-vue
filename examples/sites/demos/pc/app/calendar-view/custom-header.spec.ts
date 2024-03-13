import { test, expect } from '@playwright/test'

test('自定义头部显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#custom-header')
  const timelineBtn = page.locator('label').nth(3)
  const customHeader = page.getByText('2023-5-3 周三')
  await timelineBtn.click()
  await page.waitForTimeout(200)
  await expect(customHeader).toBeVisible()
})
