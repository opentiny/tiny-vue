import { test, expect } from '@playwright/test'

test('表尾统计（空数据）', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-footer#footer-footer-summation-empty')
  await expect(page.getByRole('row', { name: '平均 0' }).getByRole('cell', { name: '0' })).toBeVisible()
  await page.getByRole('button', { name: '加载数据' }).click()
  await expect(page.getByRole('cell', { name: '663' })).toBeVisible()
})
