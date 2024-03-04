import { test, expect } from '@playwright/test'

test('表尾合并行或列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-footer#footer-footer-row-or-column-span')
  await expect(page.getByRole('cell', { name: '全部的员工数量' })).toBeVisible()
  await expect(page.getByRole('cell', { name: '5310' })).toBeVisible()
})
