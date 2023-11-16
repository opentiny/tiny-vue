import { test, expect } from '@playwright/test'

test('列异步数据渲染', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-renderer#news-async-colunm-render')
  await page.waitForTimeout(600)
  await expect(page.getByRole('cell', { name: '福州' })).toBeVisible()
})
