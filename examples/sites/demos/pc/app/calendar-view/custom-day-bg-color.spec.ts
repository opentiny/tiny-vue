import { test, expect } from '@playwright/test'

test('自定义单元格背景色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#custom-day-bg-color')
  const selectDay = page.getByRole('listitem').filter({ hasText: '10' }).first()
  await expect(selectDay).toHaveClass(/bg-red/)
})
