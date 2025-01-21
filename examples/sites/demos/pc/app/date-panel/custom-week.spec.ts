import { test, expect } from '@playwright/test'

test('[DatePanel] 测试周次序号', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#custom-weeks')

  // 选择年份月份日期
  await page.getByRole('button', { name: '2025 年' }).click()
  await page.getByText('2026').click()
  await page.getByText('三月').click()
  await expect(page.getByText('12w')).toBeVisible()

  // 选择下个月
  await page.getByLabel('下个月').click()
  await expect(page.getByText('17w')).toBeVisible()

  // 选择日期
  await page.getByText('23', { exact: true }).click()
  await expect(page.getByText('-04-23')).toBeVisible()
})
