import { test, expect } from '@playwright/test'

test('[DatePicker] 测试范围选择自定义', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/custom-range')
  expect(page.getByPlaceholder('开始日期')).toBeVisible()
  expect(page.getByText('至', { exact: true })).toBeVisible()
  expect(page.getByPlaceholder('结束日期')).toBeVisible()
})
