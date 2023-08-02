import { expect, test } from '@playwright/test'

test('[DatePicker] 测试范围选择取消面板联动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/unlink-panels')
})