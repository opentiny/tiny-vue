import { test, expect } from '@playwright/test'

test('表头对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-align#align-header-align')
  await expect(page.getByRole('cell', { name: '公司名称（左对齐）' })).toHaveCSS('text-align', 'left')
  await expect(page.getByRole('cell', { name: '员工数（右对齐）' })).toHaveCSS('text-align', 'right')
  await expect(page.getByRole('cell', { name: '创建日期（居中对齐）' })).toHaveCSS('text-align', 'center')
})
