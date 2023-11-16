import { test, expect } from '@playwright/test'

test('表格服务端排序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-sort#sort-server-sort')
  await page.getByRole('cell', { name: '员工数' }).getByRole('img').click()
  await expect(page.getByText('asc')).toBeVisible()
})
