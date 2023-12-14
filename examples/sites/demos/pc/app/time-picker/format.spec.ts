import { test, expect } from '@playwright/test'

test('时间格式化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#format')

  // format: 时间输入框中显示的格式
  await page.getByRole('textbox', { name: '06:40:00 pm' }).click()
  await page.getByText('07 pm').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('textbox', { name: '07:40:00 pm' })).toBeVisible()

  await page.getByRole('textbox', { name: '19:40:00 pm' }).click()
  await page.getByRole('listitem').filter({ hasText: '08 pm' }).locator('span').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('textbox', { name: '20:40:00 pm' })).toBeVisible()

  await page.getByRole('textbox', { name: '8:40:0 PM' }).click()
  await page.getByRole('listitem').filter({ hasText: '09 PM' }).locator('span').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('textbox', { name: '9:40:0 PM' })).toBeVisible()

  await page.getByRole('textbox', { name: '21:40:0 PM' }).click()
  await page.getByRole('listitem').filter({ hasText: '10 PM' }).locator('span').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('textbox', { name: '22:40:0 PM' })).toBeVisible()

  // value-format: 选中值的格式
  await page.getByRole('textbox', { name: '18:30:00' }).click()
  await page.getByRole('listitem').filter({ hasText: '19' }).first().click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('textbox', { name: '19:30:00' })).toBeVisible()

  // picker-options.format: 下拉框中显示的格式
  const timePickerHour = page.locator('.of-hidden > div:nth-child(14) .tiny-scrollbar').nth(0)
  const timePickerMinute = page.locator('.of-hidden > div:nth-child(14) .tiny-scrollbar').nth(1)
  const timePickerSecond = page.locator('.of-hidden > div:nth-child(14) .tiny-scrollbar').nth(2)
  await page.getByRole('textbox', { name: '18:40:00' }).click()
  await expect(timePickerHour).toBeVisible()
  await expect(timePickerMinute).toBeVisible()
  await expect(timePickerSecond).not.toBeVisible()
})
