import { test, expect } from '@playwright/test'

test('[DatePicker] 测试选择器打开时默认时间设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#default-value')
  const dateInput = page.getByRole('textbox', { name: '2000-11-11' })

  await page.getByRole('textbox', { name: '2000-11-10' }).click()
  await page.getByText('11', { exact: true }).click()
  await expect(dateInput).toBeVisible()
})
