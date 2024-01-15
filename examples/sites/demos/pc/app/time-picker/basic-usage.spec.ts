import { test, expect } from '@playwright/test'

test('时间选择器基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#basic-usage')

  // 测试滚动选择时间
  const timePicker = page.getByRole('textbox', { name: '18:42:00' }).first()
  await page.getByRole('textbox', { name: '18:40:00' }).first().click()
  await page.getByRole('listitem').filter({ hasText: '42' }).first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(timePicker).toBeVisible()

  // 测试箭头选择时间
  const timePickerArrowControl = page.getByRole('textbox', { name: '19:42:00' }).nth(1)
  await page.getByRole('textbox', { name: '18:42:00' }).nth(1).click()
  await page.locator('.tiny-time-spinner__wrapper > i:nth-child(2)').first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(timePickerArrowControl).toBeVisible()
})
