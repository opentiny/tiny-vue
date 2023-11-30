import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#disabled')
  const disabledBox = page.getByPlaceholder('选择时间')
  await expect(disabledBox).toBeDisabled()
})
