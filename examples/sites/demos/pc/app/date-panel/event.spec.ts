import { test, expect } from '@playwright/test'

test('[DatePanel] 测试事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#event')

  // datePanel
  await page.getByRole('button', { name: '2025 年' }).click()
  await expect(page.getByRole('cell', { name: '2025' })).toBeVisible()
  await page.getByText('2024').click()
  await page.getByText('七月').click()
  await page.locator('#event').getByText('17').first().click()
  await expect(page.getByText('触发 面板选中 事件，组件绑定值为：2024-07-')).toBeVisible()

  // dateRange
  await page.locator('#event').getByText('9', { exact: true }).nth(2).click()
  await page.locator('#event').getByText('16').nth(2).click()
  await expect(page.getByText('触发 区间面板选中 事件，组件绑定值为：2025-01-')).toBeVisible()
})
