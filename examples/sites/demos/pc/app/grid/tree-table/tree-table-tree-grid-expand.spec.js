import { test, expect } from '@playwright/test'

test('检查树节点展开行数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-table#tree-table-tree-grid-expand')
  await page.getByRole('cell', { name: '1' }).getByRole('img').click()

  await expect(page.getByText('展开行数：1')).toBeVisible()
})
