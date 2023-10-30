import { test, expect } from '@playwright/test'

test('行编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#tiny-first-menu-row-editing')
  await page.getByText('GFD科技YX公司').first().click()
  await expect(page.getByRole('textbox').nth(2)).toBeVisible
  await expect(page.getByRole('textbox').nth(3)).toBeVisible
  await page.getByRole('textbox').nth(1).fill('sdf')
  await page.getByText('名称').click()
  await expect(page.getByRole('cell', { name: 'sdf' })).toHaveClass(/col__valid-success/)
})
