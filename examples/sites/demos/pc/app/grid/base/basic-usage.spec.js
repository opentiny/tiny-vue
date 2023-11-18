import { test, expect } from '@playwright/test'

test('标签式表格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid#basicUsage')

  await expect(page.getByRole('row', { name: '1 800 2014-04-30 00:56:00 福州' })).toBeVisible()
})
