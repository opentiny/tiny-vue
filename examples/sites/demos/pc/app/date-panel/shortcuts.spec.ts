import { test, expect } from '@playwright/test'

test('[DatePanel] 测试快捷选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#shortcuts')

  // datePanel
  await page.getByRole('button', { name: '今天' }).click()
  await page.getByRole('button', { name: '昨天' }).click()
  await page.getByRole('button', { name: '一周前' }).click()
  await expect(page.locator('.value')).not.toHaveText('')

  // dateRange
  await page.getByRole('button', { name: '最近三个月' }).click()
  await page.getByRole('button', { name: '最近一个月' }).click()
  await page.getByRole('button', { name: '最近一周' }).click()
  await expect(page.locator('.value1')).not.toHaveText('')

  // monthRange
  await page.getByRole('button', { name: '本月' }).click()
  await page.getByRole('button', { name: '今年至今' }).click()
  await page.getByRole('button', { name: '最近六个月' }).click()
  await expect(page.locator('.value2')).not.toHaveText('')

  // yearRange
  await page.getByRole('button', { name: '本年' }).click()
  await page.getByRole('button', { name: '近五年' }).click()
  await page.getByRole('button', { name: '近十年' }).click()
  await expect(page.locator('.value3')).not.toHaveText('')
})
