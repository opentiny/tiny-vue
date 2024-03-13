import { test, expect } from '@playwright/test'

test('树表高亮键盘操作', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-table#tree-table-tree-grid-keyboard-operation')
  await page.getByRole('row', { name: '1 GFD科技YX公司 华东区 800' }).getByRole('img').click()
  await page.getByRole('row', { name: '3 WWWW科技YX公司 华南区 500' }).getByRole('img').click()
  await page.getByText('GFD科技YX公司').click()
  await page.locator('body').press('Enter')
  await expect(page.locator('.tiny-grid-body__row').nth(1)).toHaveClass(/row__current/)
})
