import { test, expect } from '@playwright/test'

test('[DatePicker] 测试选择快捷选项日期：今天/昨天/一周前', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#shortcuts')
  const datePickerDom = page.locator('body > .tiny-date-picker')
  // 选择今天/昨天/一周前
  await page.locator('#preview').getByRole('textbox').click()
  await expect(datePickerDom).toBeVisible()
  await page.getByRole('button', { name: '今天' }).click()
  await page.locator('.tiny-date-editor input').click()
  await page.getByRole('button', { name: '昨天' }).click()
  await page.locator('.tiny-date-editor input').click()
  await page.getByRole('button', { name: '一周前' }).click()
  await expect(datePickerDom).not.toBeVisible()
})
