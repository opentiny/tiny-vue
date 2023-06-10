import { test, expect } from '@playwright/test'

test('指定时间点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-select/picker-options')
  expect(await page.getByPlaceholder('选择时间').getAttribute('title')).not.toBeNull()
})
