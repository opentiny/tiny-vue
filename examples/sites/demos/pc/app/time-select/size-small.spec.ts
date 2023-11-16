import { test, expect } from '@playwright/test'

test('small 尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#size-small')
  const smallBox = page.getByPlaceholder('选择时间')
  await expect(smallBox).toHaveCSS('height', '32px')
})
