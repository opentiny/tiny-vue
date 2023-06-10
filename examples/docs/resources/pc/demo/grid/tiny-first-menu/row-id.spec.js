import { test, expect } from '@playwright/test'

test('唯一主键', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-sort/tiny-first-menu-row-id')
  await page.getByRole('button', { name: '打印rowId' }).click()
  await expect(page.getByText('row_1')).toBeVisible()
})
