import { expect, test } from '@playwright/test'

test('[DatePicker] 测试只读状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/readonly')
})