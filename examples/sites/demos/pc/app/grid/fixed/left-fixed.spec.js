import { test, expect } from '@playwright/test'

test('左冻结', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-fixed#fixed-left-fixed')
  await expect(page.getByRole('cell', { name: '1', exact: true })).toHaveCSS('left', '0px')
  await expect(page.locator('td:nth-child(2)').first()).toHaveCSS('left', '60px')
  await expect(page.locator('.tiny-grid-header__column').first()).toHaveCSS('left', '0px')
})
