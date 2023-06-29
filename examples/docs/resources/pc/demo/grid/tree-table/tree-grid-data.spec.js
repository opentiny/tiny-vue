import { test, expect } from '@playwright/test'

test('树表扁平化数据结构', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-tree-grid/tree-table-tree-grid-data')
  await page.getByRole('row', { name: '康康物业YX公司 华南区 400' }).getByRole('img').click()
  await page.getByRole('row', { name: 'IK有限责任公司 华南区 400' }).locator('span').nth(1).click()
  await page.getByText('IK有限责任股份YX公司').click()

  await expect(page.getByRole('row', { name: 'IK有限责任股份YX公司 华南区 455' }).getByText('华南区')).toBeVisible()
})
