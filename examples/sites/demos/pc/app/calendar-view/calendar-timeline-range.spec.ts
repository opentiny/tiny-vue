import { test, expect } from '@playwright/test'

test('时间线范围配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#calendar-timeline-range')
  const dayTime = page.locator('.day-times')
  const firstTime = dayTime.locator('ul>li>span').first()
  const lastTime = dayTime.getByText('21:00')
  await expect(firstTime).toHaveText('10:00')
  await expect(lastTime).not.toBeVisible()
})
