import { expect, test } from '@playwright/test'

test('[DatePicker] 测试设置是否显示为东八区时间', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/utc8')
})