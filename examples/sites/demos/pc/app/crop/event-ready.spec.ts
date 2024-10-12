import { test, expect } from '@playwright/test'

test('ready 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#event-ready')

  await expect(page.getByText('触发 ready 事件')).toHaveCount(1)
})
