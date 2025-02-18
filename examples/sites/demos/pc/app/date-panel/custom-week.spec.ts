import { test, expect } from '@playwright/test'

test('[DatePanel] 测试周次序号', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#custom-weeks')

  // datePanel
  // 选择年份月份日期
  await page.getByRole('button', { name: '2025 年' }).click()
  await page.getByText('2026').click()
  await page.getByText('三月').click()
  await expect(page.getByText('12w')).toBeVisible()

  // 选择下个月
  await page.getByLabel('下个月').click()
  await expect(page.getByText('17w')).toBeVisible()

  // 选择日期
  await page.getByText('23', { exact: true }).first().click()
  await expect(page.getByText('-04-23')).toBeVisible()
  await expect(page.locator('.value')).toHaveText('2026-04-23')

  // dateRange
  await page.locator('div:nth-child(2) > .tiny-date-range-picker__header > button:nth-child(2)').click()
  await expect(page.getByText('12w')).toBeVisible()

  await page.getByText('13').nth(1).click()
  await page.getByText('17').nth(2).click()
  await expect(page.locator('.value1')).toHaveText('[ "2025-02-13", "2025-02-17" ]')
})
