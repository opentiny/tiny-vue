import { expect, test } from '@playwright/test'

test('[DatePicker] 测试时区选择', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#timezone')
})
