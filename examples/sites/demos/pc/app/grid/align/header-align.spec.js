import { test, expect } from '@playwright/test'

test('表头左对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-align#align-header-align-left-header-align')
  await expect(page.getByRole('cell', { name: '公司名称' })).toHaveCSS('text-align', 'left')
})
