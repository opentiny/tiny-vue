import { test, expect } from '@playwright/test'

test('冻结列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-grid#tree-table-tree-grid-fixed-column')
  const fixedColumn = await page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[1]/td[1]')

  await expect(fixedColumn).toHaveCSS('left', '0px')
})
