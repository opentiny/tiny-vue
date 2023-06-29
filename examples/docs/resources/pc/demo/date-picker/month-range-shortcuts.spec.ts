import { expect, test } from '@playwright/test'

test('[DatePicker] 测试月份范围快捷选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/month-range-shortcuts')
})