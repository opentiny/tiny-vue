import { test, expect } from '@playwright/test'

test('测试周次序号', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#custom-weeks')
})
