import { test, expect } from '@playwright/test'

test('表尾居中对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-align/align-footer-align-center-footer-align')
  await expect(page.getByRole('cell', { name: '平均' })).toHaveCSS('text-align', 'center')
})
