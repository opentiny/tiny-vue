import { test, expect } from '@playwright/test'

test('日期多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#multi-select')
  const selectDay16 = page.getByRole('listitem').filter({ hasText: '16' })
  const selectDay17 = page.getByRole('listitem').filter({ hasText: '17' })
  await selectDay16.click()
  await selectDay17.click()
  await page.waitForTimeout(100)
  await expect(selectDay16.locator('.day-selected')).toBeVisible()
  await expect(selectDay17.locator('.day-selected')).toBeVisible()
})
