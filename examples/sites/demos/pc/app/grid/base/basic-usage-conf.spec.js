import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid#basicUsage-conf')
  await expect(page.getByRole('row', { name: '3 1300 2014-02-14 14:14:14 中山' })).toBeVisible()
})
