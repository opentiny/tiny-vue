import { expect, test } from '@playwright/test'

test('[DatePicker] 测试选择月份范围', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/month-range')
})