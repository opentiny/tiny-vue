import { test, expect } from '@playwright/test'

test('标签式表格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid#base-basic-usage')

  await expect(page.getByRole('cell', { name: 'GFD 有限责任公司' })).toBeVisible()
})
