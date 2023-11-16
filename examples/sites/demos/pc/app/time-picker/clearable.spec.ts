import { test, expect } from '@playwright/test'

test('隐藏清除按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#clearable')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor > input')
  const closeIcon = preview.locator('.tiny-date-editor--time svg.baseClearicon')

  await timePicker.click()
  await timePicker.fill('19:40:00')
  await timePicker.press('Enter')
  await timePicker.hover()
  await expect(closeIcon).not.toBeVisible()
})
