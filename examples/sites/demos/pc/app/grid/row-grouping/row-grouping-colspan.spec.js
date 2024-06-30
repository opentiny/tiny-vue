import { test, expect } from '@playwright/test'

test('分组表格虚拟滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-row-grouping#row-grouping-colspan')
  const row = page.locator('.tiny-grid-body__row')
  await expect(row.nth(0).locator('.tiny-grid-body__column').nth(2)).toHaveAttribute('colspan', '2')
})
