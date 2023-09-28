import { test, expect } from '@playwright/test'

test('右冻结', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-fixed/fixed-right-fixed')
  await expect(page.getByRole('cell', { name: '城市' })).toHaveCSS('right', '4px')
})
