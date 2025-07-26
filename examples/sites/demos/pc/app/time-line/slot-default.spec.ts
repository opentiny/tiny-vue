import { test, expect } from '@playwright/test'

test('默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('time-line#slot-default')

  const timeline = await page.locator('.tiny-timeline')
  await page.waitForSelector('.tiny-timeline')

  expect(await timeline.locator('.tiny-timeline-item').count()).toBe(0)
  expect(await timeline.locator('ol').count()).toBeGreaterThan(0)
})
