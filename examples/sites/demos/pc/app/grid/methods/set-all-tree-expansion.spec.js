import { test, expect } from '@playwright/test'

test('手动展开所有树节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-grid#methods-set-all-tree-expansion')
  await page.getByRole('button', { name: 'setAllTreeExpansion' }).click()

  await expect(page.getByRole('row', { name: 'GFD科技股份有限子公司 华东区 700' })).toBeVisible()
})
