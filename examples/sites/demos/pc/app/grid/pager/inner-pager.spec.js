import { test, expect } from '@playwright/test'

test('使用第三方分页组件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-pager#pager-inner-pager')
  await page.getByRole('listitem').filter({ hasText: '2' }).click()
  await expect(page.getByRole('cell', { name: '10' })).toBeVisible()
})
