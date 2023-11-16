import { test, expect } from '@playwright/test'

test('步长', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#step')
})
