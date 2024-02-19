import { test, expect } from '@playwright/test'

test('自定义表格加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-loading#loading-grid-custom-loading')
  await expect(page.getByText('正在加载中。。。')).toBeVisible()
})
