import { test, expect } from '@playwright/test'

test('[DatePanel] 测试事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#event')

  // datePanel
  await page.locator('#event').getByText('17').first().click()
  await expect(page.getByText('触发 面板选中 事件，组件绑定值为：2025-01-')).toBeVisible()

  // 月份面板
  await page.waitForTimeout(1000)
  await page.getByText('七月').first().click()
  await expect(page.getByText('触发 月份面板选中 事件，组件绑定值为：2025-')).toBeVisible()

  // 年份面板
  await page.waitForTimeout(1000)
  await page.getByText('2030').first().click()
  await expect(page.getByText('触发 年份面板选中 事件，组件绑定值为：')).toBeVisible()

  // dateRange
  await page.waitForTimeout(1000)
  await page.locator('#event').getByText('9', { exact: true }).nth(2).click()
  await page.locator('#event').getByText('16').nth(2).click()
  await expect(page.getByText('触发 区间面板选中 事件，组件绑定值为：2025-02-')).toBeVisible()

  // monthRange
  await page.waitForTimeout(1000)
  await page.locator('#event').getByText('七月').nth(2).click()
  await page.locator('#event').getByText('五月').nth(2).click()
  await expect(page.getByText('触发 月份区间面板选中 事件，组件绑定值为：2025-05,2025-')).toBeVisible()

  // yearRange
  await page.waitForTimeout(1000)
  await page.getByText('2027').nth(1).click()
  await page.getByText('2042', { exact: true }).click()
  await expect(page.getByText('触发 年份区间面板选中 事件，组件绑定值为：')).toBeVisible()
})
