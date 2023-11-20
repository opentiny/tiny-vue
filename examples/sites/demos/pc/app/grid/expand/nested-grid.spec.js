import { test, expect } from '@playwright/test'

test('嵌套表格场景测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-expand#expand-nested-grid')
  await page.getByRole('row', { name: '1 800 2014-04-30 00:56:00 福州' }).locator('i').click()

  await expect(page.getByRole('cell', { name: 'GFD科技YX公司', exact: true })).toBeVisible()
})
