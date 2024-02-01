import { test, expect } from '@playwright/test'

test('冻结列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-table#tree-table-tree-grid-fixed-column')
  const fixedColumn = await page.locator('.col__fixed').first()

  await expect(fixedColumn).toHaveCSS('left', '0px')
})
