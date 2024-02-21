import { test, expect } from '@playwright/test'

test('动态改变筛选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-dynamic-filter')
  await page.getByRole('button', { name: '动态改变城市列筛选项' }).click()
  await page.getByRole('cell', { name: '城市' }).getByRole('img').click()
  await expect(page.getByText('合肥')).toBeVisible()
  await page.getByRole('cell', { name: '公司名称' }).getByRole('img').click()
  await expect(page.getByText('GFD科技YX公司1')).toBeVisible()
})
