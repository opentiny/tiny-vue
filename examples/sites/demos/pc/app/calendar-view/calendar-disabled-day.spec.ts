import { test, expect } from '@playwright/test'

test('日期禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#calendar-disabled-day')

  const wrap = page.locator('#calendar-disabled-day .tiny-calendar-view-month')
  const day10 = wrap.getByText('10').first()
  const day14 = wrap.getByText('14')
  const day15 = wrap.getByText('15')

  await expect(day10).toHaveClass(/is-disabled/)
  await expect(day14).toHaveClass(/is-disabled/)
  await expect(day15).toHaveClass('date')
})
