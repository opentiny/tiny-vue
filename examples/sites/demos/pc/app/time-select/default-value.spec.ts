import { test, expect } from '@playwright/test'

test('选择器打开时默认时间设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#default-value')
  const demo = page.locator('#default-value')
  await demo.locator('.tiny-date-editor').click()
  const defaultSelect = page.getByText('10:00')
  await expect(defaultSelect).toHaveClass(/default/)
})
