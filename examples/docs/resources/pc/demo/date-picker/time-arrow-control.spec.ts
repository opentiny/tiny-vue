import { expect, test } from '@playwright/test'

test('[DatePicker] 测试箭头按钮控制时间选择', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/time-arrow-control')
})