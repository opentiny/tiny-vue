import { test, expect } from '@playwright/test'

test('树表高亮键盘操作', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-table#tree-table-tree-grid-keyboard-operation')
  const demo = page.locator('#tree-table-tree-grid-keyboard-operation')
  await demo.getByRole('row', { name: '1 GFD 科技 YX 公司 华东区 800' }).getByRole('img').click()
  await demo.getByRole('row', { name: '3 WWWW 科技 YX 公司 华南区 500' }).getByRole('img').click()
  await demo.getByText('GFD 科技 YX 公司').click()
  await page.waitForTimeout(300)
  await page.locator('body').press('ArrowDown')
  await page.waitForTimeout(300)
  await expect(demo.locator('.tiny-grid-body__row').nth(1)).toHaveClass(/row__current/)
})

