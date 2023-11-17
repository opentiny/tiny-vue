import { test, expect } from '@playwright/test'

test('操作列基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-serial-column#serial-column-default-serial-column')

  await expect(page.getByRole('cell', { name: '5' })).toBeVisible()
})
