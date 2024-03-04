import { test, expect } from '@playwright/test'

test('树表-选中关联字段', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-table#tree-table-tree-grid-index-checkfield')
  await page.getByRole('cell', { name: 'GFD科技有限公司' }).getByRole('img').click()

  await expect(page.locator('.tiny-grid-body__row input').nth(0)).toBeChecked()
  await expect(page.locator('.tiny-grid-body__row input').nth(1)).toBeChecked()
})
