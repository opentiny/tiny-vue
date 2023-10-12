import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-select/disabled')
  const disabledBox = page.getByPlaceholder('选择时间')
  await expect(disabledBox).toBeDisabled()
})
