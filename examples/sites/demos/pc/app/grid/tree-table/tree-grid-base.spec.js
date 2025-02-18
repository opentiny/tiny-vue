import { test, expect } from '@playwright/test'

test('自定树节点图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-table#tree-table-tree-grid-base')
  await page.getByRole('row', { name: 'GFD 科技 YX 公司 华东区 800' }).getByRole('img').click()
  await page.getByRole('row', { name: 'WWWW 科技 YX 公司 华南区 500' }).getByRole('img').click()
  await page.getByRole('row', { name: 'TGBYX 公司 华南区 360' }).getByRole('img').click()
  await page.getByRole('row', { name: 'YHN 科技 YX 公司 华南区 810' }).getByRole('img').click()

  await expect(page.getByText('WSX 科技 YX 公司')).toBeVisible()
})
