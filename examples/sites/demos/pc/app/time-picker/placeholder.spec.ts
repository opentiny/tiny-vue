import { test, expect } from '@playwright/test'

test('占位符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#placeholder')
})
