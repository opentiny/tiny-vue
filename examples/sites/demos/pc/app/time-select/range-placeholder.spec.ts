import { test, expect } from '@playwright/test'

test('固定时间范围', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#range-placeholder')
  const timeInput = page.getByRole('textbox', { name: '起始时间' })
  const options = page.locator('.tiny-picker-panel').nth(3).locator('div')
  await timeInput.click()
  // options的第一条是options.first()，时间是08:30；最后一条（最大时间）是options.nth(43)，时间是18：30
  await expect(options.first()).toContainText('08:30')
  await expect(options.nth(43)).toContainText('18:30')
  // 起始时间选择10:00，稍后验证结束时间10:00是否disabled。
  options.nth(9).click()
  await expect(page.locator('.tiny-input-suffix .tiny-input__inner').first()).toHaveValue('10:00')

  const timeEnd = page.getByRole('textbox', { name: '结束时间' })
  const endOptions = page.locator('.tiny-picker-panel').nth(3).locator('div')
  await timeEnd.click()
  await expect(endOptions.first()).toContainText('08:30')
  await expect(endOptions.nth(43)).toContainText('18:30')
  // 验证结束时间10:00是否disabled
  await expect(endOptions.nth(9)).toHaveClass('tiny-time-select__item disabled')
  endOptions.nth(10).click()
  await expect(page.locator('.tiny-input-suffix .tiny-input__inner').last()).toHaveValue('10:15')
})
