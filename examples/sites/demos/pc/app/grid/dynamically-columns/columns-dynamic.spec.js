import { test, expect } from '@playwright/test'

test('动态列数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-dynamically-columns#column-columns-dynamic')
  await expect(page.getByRole('cell', { name: '2014-04-30 00:56:00' })).toBeVisible()
})
