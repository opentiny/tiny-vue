import { test, expect } from '@playwright/test'

test('默认提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-empty#empty-empty-data-tip')

  // 空数据时判断默认提示成功
  await expect(page.getByText('没有更多数据了！')).toBeVisible()
  await expect(page.getByText('没有更多数据了', { exact: true })).toBeVisible()
})
