import { test, expect } from '@playwright/test'

test('生成 1000 列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-load-column')
  await page.getByRole('button', { name: '空表格，请点击生成 1000 列' }).click()
  await expect(page.getByRole('cell', { name: 'row1_col2' })).toBeVisible()
})
