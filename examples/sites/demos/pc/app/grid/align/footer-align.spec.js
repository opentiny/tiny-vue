import { test, expect } from '@playwright/test'

test('表尾左对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-align#align-footer-align-left-footer-align')
  await expect(page.getByRole('cell', { name: '平均' })).toHaveCSS('text-align', 'left')
})
