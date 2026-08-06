import { test, expect } from '@playwright/test'

test('表格单元格右对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-align#align-grid-align')
  const demo = page.locator('#align-grid-align')
  await expect(demo.getByRole('cell', { name: 'GFD 科技 YX 公司' })).toHaveCSS('text-align', 'left')
  await expect(demo.getByRole('cell', { name: '1300' })).toHaveCSS('text-align', 'center')
  await expect(demo.getByRole('cell', { name: '2014-04-30 00:56:00' })).toHaveCSS('text-align', 'right')
})
