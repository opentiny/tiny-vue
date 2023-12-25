import { test, expect } from '@playwright/test'

test('自定义日期单元格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#custom-day-cell')
  const pcDemo = page.locator('.pc-demo')
  await expect(pcDemo).toHaveText(/通知事项/)
  await expect(pcDemo).toHaveText(/这是一条警告/)
  await expect(pcDemo).toHaveText(/这是一条错误/)
})
