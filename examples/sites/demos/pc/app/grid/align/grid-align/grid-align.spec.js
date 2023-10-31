import { test, expect } from '@playwright/test'

test('表格单元格右对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-align#align-grid-align-left-grid-align')
  await expect(page.getByRole('cell', { name: 'GFD科技YX公司' })).toHaveCSS('text-align', 'left')
})
