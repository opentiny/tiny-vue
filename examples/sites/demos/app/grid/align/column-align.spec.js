import { test, expect } from '@playwright/test'

test('列对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-align/align-column-align')
  await expect(page.getByRole('cell', { name: '创建日期(右对齐)' })).toHaveCSS('text-align', 'right')
  await expect(page.getByRole('cell', { name: '2014-04-30 00:56:00' })).toHaveCSS('text-align', 'right')
  await expect(page.getByRole('cell', { name: '福州' })).toHaveCSS('text-align', 'center')
  await expect(page.getByRole('cell', { name: '城市(居中对齐)' })).toHaveCSS('text-align', 'center')
})
