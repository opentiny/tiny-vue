import { test, expect } from '@playwright/test'

test('测试禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#disabled')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor > input')

  await expect(timePicker).toBeDisabled()
  await expect(timePicker).toHaveCSS('cursor', 'not-allowed')
})
