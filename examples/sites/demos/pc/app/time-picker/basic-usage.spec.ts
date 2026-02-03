import { test, expect } from '@playwright/test'

test('时间选择器基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#basic-usage')

  // 测试滚动选择时间
  const demo = page.locator('#basic-usage')
  const timePicker = demo.locator('.tiny-input__inner').first()
  await demo.locator('.tiny-input__inner').first().click()
  await page.getByRole('listitem').filter({ hasText: '42' }).first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(timePicker).toBeVisible()

  // 测试箭头选择时间
  const timePickerArrowControl = demo.locator('.tiny-input__inner').nth(1)
  await demo.locator('.tiny-input__inner').nth(1).click()
  await page.locator('.tiny-time-spinner__wrapper > i:nth-child(2)').first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(timePickerArrowControl).toBeVisible()
})
