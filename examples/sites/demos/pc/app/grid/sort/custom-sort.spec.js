import { test, expect } from '@playwright/test'

test('自定义排序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-sort#sort-custom-sort')
  await page.getByRole('cell', { name: '公司名称' }).getByRole('img').click()
  await expect(page.locator('.tiny-grid-body__row').nth(1)).toContainText('KBG物业YX公司')
})
