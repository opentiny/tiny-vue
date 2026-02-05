import { test, expect } from '@playwright/test'

test('指定时间点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#picker-options')
  const input = page.locator('#picker-options').locator('.tiny-input__inner')
  expect(await input.getAttribute('title')).not.toBeNull()
})
