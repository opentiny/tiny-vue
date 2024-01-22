import { test, expect } from '@playwright/test'

test('日期禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#calendar-disabled-day')
  const day10 = page.getByText('10').nth(2)
  const day14 = page.getByText('14').nth(1)
  const day15 = page.getByText('15').nth(1)
  await expect(day10).toHaveClass(/is-disabled/)
  await expect(day14).toHaveClass(/is-disabled/)
  await expect(day15).toHaveClass('date')
})
