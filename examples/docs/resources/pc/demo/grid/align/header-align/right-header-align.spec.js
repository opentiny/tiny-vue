import { test, expect } from '@playwright/test'

test('表头右对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-align/align-header-align-right-header-align')
  await expect(page.getByRole('cell', { name: '员工数' })).toHaveCSS('text-align', 'right')
})
