import { test, expect } from '@playwright/test'

test('[DatePanel] 测试只读', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#readonly')

  // datePanel
  await page.locator('#readonly').getByLabel('上个月').first().click()
  await page.locator('#readonly').getByText('19').first().click()
  await page.locator('#readonly').getByLabel('下个月').first().click()
  await page.locator('#readonly div').filter({ hasText: /^21$/ }).first().click()
  await page.locator('#readonly div').filter({ hasText: /^23$/ }).first().click()
  await expect(page.locator('.value')).toHaveText('2025-01-15')

  // 月份面板
  await page.getByText('七月').first().click()
  await expect(page.locator('.month')).toHaveText('2025-01')

  // 年份面板
  await page.getByText('2030').first().click()
  await expect(page.locator('.year')).toHaveText('2025')

  // dateRange
  await page.locator('#readonly').getByText('14').nth(1).click()
  await page.locator('#readonly').getByText('25', { exact: true }).nth(2).click()
  await expect(page.locator('.value1')).toHaveText('[ "2025-01-15", "2025-02-15" ]')

  // monthRange
  await page.getByText('二月').first().click()
  await page.getByText('九月').nth(1).click()
  await expect(page.locator('.value2')).toHaveText('[ "2024-03", "2025-02" ]')

  // yearRange
  await page.getByText('2043', { exact: true }).click()
  await page.getByText('2039').click()
  await expect(page.locator('.value3')).toHaveText('[ "2024", "2028" ]')
})
