import { test, expect } from '@playwright/test'

test('[DatePanel] 测试月份/年份/日期选择', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#basic-usage')

  // 点击展示年份面板
  await page.getByRole('button', { name: '2025 年' }).click()
  await expect(page.getByRole('cell', { name: '2025' })).toBeVisible()

  // 选择年份展示月份面板
  await page.getByRole('cell', { name: '2025' }).click()
  await expect(page.getByRole('cell', { name: '一月', exact: true })).toBeVisible()

  // 选择月份展示日期面板
  await page.getByRole('cell', { name: '一月', exact: true }).click()
  await expect(page.getByRole('cell', { name: '15' }).locator('div')).toBeVisible()

  // 选择日期
  await page.getByRole('cell', { name: '15' }).locator('div').click()
  await expect(page.getByText('-01-15')).toBeVisible()
})
