import { test, expect } from '@playwright/test'

test('[DatePicker] 测试选择快捷选项日期：今天/昨天/一周前', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#shortcuts')

  // 日期选择：今天/昨天/一周前
  const datePickerDom = page.getByRole('textbox', { name: '请选择日期' })
  await datePickerDom.click()
  await page.getByRole('button', { name: '今天' }).click()
  await page.locator('.tiny-date-editor input').first().click()
  await page.getByRole('button', { name: '昨天' }).click()
  await page.locator('.tiny-date-editor input').first().click()
  await page.getByRole('button', { name: '一周前' }).click()
  await expect(datePickerDom).not.toHaveValue('')
})
