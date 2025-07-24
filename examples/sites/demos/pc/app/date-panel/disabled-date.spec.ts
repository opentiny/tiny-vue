import { test, expect } from '@playwright/test'

test('[DatePanel] 测试时间禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#disabled-date')

  // datePanel
  await page.getByLabel('上个月').first().click()
  await page.getByRole('cell', { name: '31' }).locator('div').first().click()
  await expect(page.locator('.value')).toHaveText('2025-01-15')

  await page.getByLabel('下个月').first().click()
  await page.getByText('23', { exact: true }).first().click()
  await expect(page.locator('.value')).toHaveText('2025-01-23')

  // 月份面板
  await page
    .locator('div')
    .filter({ hasText: /^2025 年6 月$/ })
    .getByLabel('前一年')
    .click()
  await page.getByText('一月', { exact: true }).first().click()
  await page.getByText('六月').first().click()
  await expect(page.locator('.month')).toHaveText('2024-06')

  // 年份面板
  await page.getByText('2020').nth(1).click()
  await page.getByText('2031').nth(1).click()
  await expect(page.locator('.year')).toHaveText('2031')

  // dateRange
  await page.locator('.tiny-date-range-picker__header > button').first().click()
  await page.getByRole('cell', { name: '16' }).nth(1).click()
  await page.locator('div').filter({ hasText: /^18$/ }).nth(2).click()
  await expect(page.locator('.value1')).toHaveText('[ "2025-01-15", "2025-02-15" ]')

  await page.locator('div:nth-child(2) > .tiny-date-range-picker__header > button').first().click()
  await page.locator('#disabled-date').getByText('31', { exact: true }).nth(2).click()
  await expect(page.locator('.value1')).toHaveText('[ "2025-01-15", "2025-02-15" ]')

  await page.locator('#disabled-date').getByText('15').nth(3).click()
  await page.locator('#disabled-date').getByText('19').nth(2).click()
  await expect(page.locator('.value1')).toHaveText('[ "2025-02-15", "2025-02-19" ]')

  // monthRange
  await page.getByText('一月', { exact: true }).nth(1).click()
  await page.getByText('二月', { exact: true }).nth(1).click()
  await page.getByText('五月').nth(2).click()
  await expect(page.locator('.value2')).toHaveText('[ "2024-02", "2025-05" ]')

  // yearRange
  await page.getByText('2020').nth(3).click()
  await page.getByText('2027').nth(1).click()
  await page.getByText('2042').click()
  await expect(page.locator('.value3')).toHaveText('[ "2027", "2042" ]')
})
