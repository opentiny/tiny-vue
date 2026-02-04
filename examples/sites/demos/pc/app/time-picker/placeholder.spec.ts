import { test, expect } from '@playwright/test'

test('占位符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#placeholder')

  await expect(page.locator('input[placeholder="请选择时间"]')).toBeVisible()
  await expect(page.locator('input[placeholder="请选择开始时间"]')).toBeVisible()
  await expect(page.locator('input[placeholder="请选择结束时间"]')).toBeVisible()
})
