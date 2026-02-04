import { test, expect } from '@playwright/test'

test('时间格式化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#format')

  // format: 时间输入框中显示的格式
  const demo = page.locator('#format')
  await demo.locator('.tiny-input__inner').first().click()
  await page.getByText('07 pm').click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)

  await demo.locator('.tiny-input__inner').nth(1).click()
  await page.waitForTimeout(100)
  await page.getByText('08 pm').nth(1).click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)

  await demo.locator('.tiny-input__inner').nth(2).click()
  await page.waitForTimeout(100)
  await page.getByText('09 PM', { exact: true }).click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)

  await demo.locator('.tiny-input__inner').nth(3).click()
  await page.waitForTimeout(100)
  await page.getByText('10 PM').nth(3).click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)

  // value-format: 选中值的格式
  await demo.locator('.tiny-input__inner').nth(4).click()
  await page.waitForTimeout(100)
  await page.getByText('19').nth(11).click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)

  // picker-options.format: 下拉框中显示的格式
  const timePickerHour = page.getByRole('list').first()
  const timePickerMinute = page.getByRole('list').nth(1)
  const timePickerSecond = page.getByRole('list').nth(2)
  await demo.locator('.tiny-input__inner').nth(5).click()
  await page.waitForTimeout(200)
  await expect(timePickerHour).toBeVisible()
  await expect(timePickerMinute).toBeVisible()
  await expect(timePickerSecond).not.toBeVisible()
})
