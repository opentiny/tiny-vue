import { test, expect } from '@playwright/test'

test('树表高亮键盘操作', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-grid#tree-table-tree-grid-keyboard-operation')
  await page.getByRole('row', { name: '3 TGBYX公司 华南区 360' }).getByRole('img').click()
  await page.getByRole('row', { name: '5 YHN科技YX公司 华南区 810' }).getByRole('img').click()
  await page.getByText('6', { exact: true }).click()
  const currentRow = page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[6]')

  await expect(currentRow).toHaveClass(/row__current/)
  await page.locator('body').press('ArrowDown')
  const nextCurrentRow = page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[7]')

  await expect(nextCurrentRow).toHaveClass(/row__current/)
})
