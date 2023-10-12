import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-select/event-blur')
  await page.getByPlaceholder('选择时间范围').click()
  const focus = page.getByPlaceholder('选择时间')
  await expect(focus).toBeFocused()
})
