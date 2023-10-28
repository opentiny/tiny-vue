import { test, expect } from '@playwright/test'

test('操作列冻结', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-fixed#fixed-multi-column-fixed')
  await expect(page.getByRole('cell', { name: '1', exact: true })).toHaveCSS('left', '0px')
  await expect(page.getByRole('cell', { name: '福州' }).first()).toHaveCSS('right', '0px')
})
