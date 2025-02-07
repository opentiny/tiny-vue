import { test, expect } from '@playwright/test'

test('[DatePanel] 测试格式化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#format')

  await page.locator('#format').getByText('15').first().click()
  await expect(page.getByText('-01-15')).toBeVisible()

  await page.locator('#format').getByText('8', { exact: true }).nth(2).click()
  await expect(page.getByText('/01/08')).toBeVisible()
})
