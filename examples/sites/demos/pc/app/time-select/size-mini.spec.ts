import { test, expect } from '@playwright/test'

test('mini 尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#size-mini')
  const miniBox = page.getByPlaceholder('选择时间')
  await expect(miniBox).toHaveCSS('height', '24px')
})
