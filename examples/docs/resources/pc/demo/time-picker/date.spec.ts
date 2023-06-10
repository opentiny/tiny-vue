import { test, expect } from '@playwright/test'

test('日期显示格式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-picker/date')

  const preview = page.locator('#preview')
  const getCloseIcon = parent => parent.locator('svg.baseClearicon')
  const weekPicker = preview.locator('.tiny-date-editor--week')
  const yearPicker = preview.locator('.tiny-date-editor--year')
  const monthPicker = preview.locator('.tiny-date-editor--month')
  const datePicker = preview.locator('.tiny-date-editor--date')
  const select = page.locator('body .tiny-picker-panel.tiny-date-picker.tiny-popper')

  // 周选择器
  const weekSelect = select.nth(3)
  await weekPicker.click()
  await expect(weekSelect).toBeVisible()
  await weekSelect.getByText('2023 年').click()
  await weekSelect.locator('.tiny-year-table td').getByText('2023').click()
  await weekSelect.locator('.tiny-month-table td').getByText(/^一月$/).click()
  await weekSelect.locator('.tiny-date-table td').getByText(/^1$/).first().click()
  await expect(weekPicker.locator('input')).toHaveValue('01')
  await weekPicker.hover()
  await expect(getCloseIcon(weekPicker)).toBeVisible()
  await getCloseIcon(weekPicker).click()
  await expect(weekPicker.locator('input')).toHaveValue('')

  // 年选择器
  const yearSelect = select.nth(3)
  await yearPicker.click()
  await expect(yearSelect).toBeVisible()
  await yearSelect.getByText('2023').click()
  await expect(yearPicker.locator('input')).toHaveValue('2023')
  await yearPicker.hover()
  await expect(getCloseIcon(yearPicker)).toBeVisible()
  await getCloseIcon(yearPicker).click()
  await expect(yearPicker.locator('input')).toHaveValue('')

  // 月选择器
  const monthSelect = select.nth(3)
  await monthPicker.click()
  await expect(monthSelect).toBeVisible()
  await monthSelect.getByText(/^一月$/).click()
  await expect(monthPicker.locator('input')).toHaveValue('01')
  await monthPicker.hover()
  await expect(getCloseIcon(monthPicker)).toBeVisible()
  await getCloseIcon(monthPicker).click()
  await expect(monthPicker.locator('input')).toHaveValue('')

  // 日选择器
  const dateSelect = select.nth(3)
  await datePicker.click()
  await expect(dateSelect).toBeVisible()
  await dateSelect.getByText('2023 年').click()
  await dateSelect.locator('.tiny-year-table td').getByText('2023').click()
  await dateSelect.locator('.tiny-month-table td').getByText(/^一月$/).click()
  await dateSelect.locator('.tiny-date-table td').getByText(/^1$/).first().click()
  await expect(datePicker.locator('input')).toHaveValue('01')
  await datePicker.hover()
  await expect(getCloseIcon(datePicker)).toBeVisible()
  await getCloseIcon(datePicker).click()
  await expect(datePicker.locator('input')).toHaveValue('')
})
