import { test, expect } from '@playwright/test'

test('判断是否可以清除搜索内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#manual-clear-query')
  const preview = page.locator('.pc-demo-container')
  const input = preview.locator('.tiny-input-display-only input').first()
  await input.click()
  await input.fill('1')
  await preview.getByRole('button', { name: '重置查询' }).click()
  await expect(input).toHaveValue('')
})
