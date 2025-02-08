import { test, expect } from '@playwright/test'

test('[DatePanel] 测试格式化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#format')
  // datePanel
  await page.locator('#format').getByText('23', { exact: true }).first().click()
  await expect(page.locator('.value')).toHaveText('2025/01/23')

  // dateRange
  await page.locator('#format').getByText('28').nth(1).click()
  await page.locator('#format').getByText('12', { exact: true }).nth(2).click()
  await expect(page.locator('.value1')).toHaveText('[ "2025/01/28", "2025/02/12" ]')
})
