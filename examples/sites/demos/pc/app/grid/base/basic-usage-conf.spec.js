import { test, expect } from '@playwright/test'

test('配置式表格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid#base-basic-usage-conf')
  await expect(page.getByRole('row', { name: '3 1300 2014-02-14 14:14:14 中山' })).toBeVisible()
})
