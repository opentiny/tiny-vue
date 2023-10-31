import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#size')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor')
  await expect(timePicker).toHaveCSS('height', '36px')
})
