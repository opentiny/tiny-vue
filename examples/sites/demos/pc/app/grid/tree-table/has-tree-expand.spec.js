import { test, expect } from '@playwright/test'

test('检查树节点是否已展开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-grid#tree-table-hasTreeExpand')
  await page.getByRole('cell', { name: '1' }).getByRole('img').click()

  await expect(page.getByText('当前展开行：1')).toBeVisible()
})
