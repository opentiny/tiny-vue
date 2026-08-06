import { test, expect } from '@playwright/test'

test('表尾对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-align#align-footer-align')
  await expect(page.getByRole('cell', { name: '和值' })).toHaveCSS('text-align', 'left')
  await expect(page.getByRole('cell', { name: '5310' })).toHaveCSS('text-align', 'right')
  await expect(page.getByRole('cell', { name: '57000' })).toHaveCSS('text-align', 'center')
})
