import { test, expect } from '@playwright/test'

test('判断是否可以清除搜索内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#manual-clear-query')
  const preview = page.locator('#preview')
  const input = preview.getByPlaceholder('请输入搜索内容').first()
  await input.click()
  await input.fill('1')
  await preview.getByRole('button', { name: '重置查询' }).click()
  await expect(input).toHaveValue('')
})
