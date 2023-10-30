import { test, expect } from '@playwright/test'

test('时间选择器基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#basic-usage')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor > input')
  const timeSelect = page.locator('.tiny-time-panel')
  const hourSelect = timeSelect.locator('.tiny-scrollbar').first()
  const minSelect = timeSelect.locator('.tiny-scrollbar').nth(1)
  const secondSelect = timeSelect.locator('.tiny-scrollbar').nth(2)

  // 测试非法输入是否赋予默认值
  await expect(timePicker).toHaveValue('18:40:00')
  await timePicker.click()
  await expect(timeSelect).toBeVisible()
  await timePicker.fill('inValidInput')
  await timePicker.press('Enter')
  await expect(timePicker).toHaveValue('18:40:00')
  // 测试可选时间范围
  await timePicker.click()
  await expect(hourSelect.locator('.tiny-time-spinner__item')).toHaveCount(24)
  await expect(minSelect.locator('.tiny-time-spinner__item')).toHaveCount(60)
  await expect(secondSelect.locator('.tiny-time-spinner__item')).toHaveCount(60)
  await expect(hourSelect.locator('.tiny-time-spinner__item.disabled')).toHaveCount(21)
  await expect(minSelect.locator('.tiny-time-spinner__item.disabled')).toHaveCount(30)
  await expect(secondSelect.locator('.tiny-time-spinner__item.disabled')).toHaveCount(0)
  await hourSelect.locator('.tiny-time-spinner__item').getByText('19').click()
  await minSelect.locator('.tiny-time-spinner__item').getByText('42').click()
  await secondSelect.locator('.tiny-time-spinner__item').getByText('01').click()
  await expect(hourSelect.locator('.tiny-time-spinner__item.disabled')).toHaveCount(21)
  await expect(minSelect.locator('.tiny-time-spinner__item.disabled')).toHaveCount(0)
  await expect(secondSelect.locator('.tiny-time-spinner__item.disabled')).toHaveCount(0)
  await expect(timePicker).toHaveValue('19:42:01')
  // 测试清除按钮
  await timePicker.hover()
  await expect(preview.locator('.tiny-date-editor--time svg.baseClearicon')).toBeVisible()
  await preview.locator('.tiny-date-editor--time svg.baseClearicon').click()
  await expect(timePicker).toHaveValue('')
})
