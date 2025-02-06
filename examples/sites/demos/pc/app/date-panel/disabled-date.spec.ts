import { test, expect } from '@playwright/test'

test('[DatePanel] 测试时间禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#disabled-date')

  await page.getByLabel('上个月').click()
  await page.getByRole('cell', { name: '31' }).locator('div').click()
  await expect(page.getByText('-01-02')).toBeVisible()

  await page.getByLabel('下个月').click()
  await page.getByText('23', { exact: true }).click()
  await expect(page.getByText('-01-23')).toBeVisible()
})
