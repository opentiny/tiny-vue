import { test, expect } from '@playwright/test'

test('服务端过滤', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-server-filter')
  await page.getByRole('cell', { name: '城市' }).getByRole('img').first().click()
  await page.locator('li').filter({ hasText: '深圳' }).click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.locator('.tiny-grid-body__row')).toHaveCount(2)
})
