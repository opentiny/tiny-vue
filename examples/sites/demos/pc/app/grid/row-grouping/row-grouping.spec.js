import { test, expect } from '@playwright/test'

test('表格分组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-row-grouping#row-grouping-row-grouping')
  await page.locator('.tiny-grid-cell-group > .tiny-svg').first().click()
  await expect(page.getByRole('cell', { name: 'GFD 科技 YX 公司' })).toHaveCount(0)
})
