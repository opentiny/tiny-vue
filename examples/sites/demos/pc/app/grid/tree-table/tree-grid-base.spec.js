import { test, expect } from '@playwright/test'

test('树表有子级的数据结构', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-grid#tree-table-tree-grid-base')
  await page.getByRole('row', { name: 'GFD科技YX公司 华东区 800' }).getByRole('img').click()
  await page.getByRole('row', { name: 'WWWW科技YX公司 华南区 500' }).getByRole('img').click()
  await page.getByRole('row', { name: 'TGBYX公司 华南区 360' }).getByRole('img').click()
  await page.getByRole('row', { name: 'YHN科技YX公司 华南区 810' }).getByRole('img').click()

  await expect(page.getByText('WSX科技YX公司')).toBeVisible()
})
