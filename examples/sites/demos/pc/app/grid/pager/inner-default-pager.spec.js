import { test, expect } from '@playwright/test'

test('使用默认分页组件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-pager#pager-inner-default-pager')
  await page.getByRole('listitem').filter({ hasText: '2' }).click()
  await expect(page.getByRole('cell', { name: '9' })).toBeVisible()
})
