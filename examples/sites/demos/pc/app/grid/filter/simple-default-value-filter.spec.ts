import { test, expect } from '@playwright/test'

test('筛选面板默认选中值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-simple-default-value-filter')
  await expect(page.getByRole('cell', { name: 'GFD科技YX公司' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'WWW科技YX公司' })).toHaveCount(0)
  await page.getByRole('cell', { name: '公司名称' }).getByRole('img').click()
  await expect(page.locator('li').filter({ hasText: 'GFD科技YX公司' })).toHaveClass(/selected/)
})
