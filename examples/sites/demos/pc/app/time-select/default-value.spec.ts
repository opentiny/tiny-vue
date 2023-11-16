import { test, expect } from '@playwright/test'

test('选择器打开时默认时间设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#default-value')
  await page.getByPlaceholder('选择时间').click()
  const defaultSelect = page.getByText('10:00')
  await expect(defaultSelect).toHaveClass(/default/)
})
