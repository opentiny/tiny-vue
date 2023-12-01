import { test, expect } from '@playwright/test'

test('自定义树表隐藏行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-table#tree-table-tree-grid-expand-active-method')
  await page.getByRole('cell', { name: 'GFD科技有限公司' }).locator('path').click()
  await page.getByRole('cell', { name: 'GFD科技股份有限子公司' }).locator('path').click()
  await expect(page.locator('.tiny-grid-body__row')).toHaveCount(3)
})
