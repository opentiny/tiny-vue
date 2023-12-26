import { test, expect } from '@playwright/test'

test('测试自定义列表底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#custom-footer')

  await expect(page.getByRole('button', { name: '操作' })).toHaveCount(2)
})
