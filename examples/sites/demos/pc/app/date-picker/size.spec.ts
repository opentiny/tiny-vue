import { expect, test } from '@playwright/test'

test('[DatePicker] 测试尺寸设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#size')
})
