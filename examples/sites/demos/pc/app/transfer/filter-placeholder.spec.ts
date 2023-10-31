import { test, expect } from '@playwright/test'

test('判断是否有占位符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#filter-placeholder')
  const preview = page.locator('#preview')
  await expect(preview.getByPlaceholder('请输入关键字搜索')).toHaveCount(2)
})
