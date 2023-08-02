import { test, expect } from '@playwright/test'

test('展开行序号列配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-tree-grid/tree-table-tree-grid-index')
  await page.getByRole('row', { name: '1 GFD科技YX公司 华东区 800' }).getByRole('img').first().click()
  await page.getByRole('row', { name: '2 WWWW科技YX公司 华南区 500' }).getByRole('img').first().click()
  await page.getByRole('row', { name: '3 TGBYX公司 华南区 360' }).getByRole('img').first().click()
  await page.getByText('3.1').click()
  await page.getByRole('row', { name: '4 康康物业YX公司 华南区 400' }).getByRole('img').first().click()

  await expect(page.getByText('4.1')).toBeVisible()
})
