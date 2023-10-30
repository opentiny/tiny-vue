import { test, expect } from '@playwright/test'

test('手动切换指定行选中状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#methods-toggle-row-selection')
  await page.getByRole('button', { name: 'toggleRowSelection' }).click()
  // 判断选中状态
  await expect(page.getByRole('row', { name: '2 300 2016-07-08 12:36:22 深圳' }).locator('label input')).toBeChecked()
  await page.getByRole('button', { name: 'toggleRowSelection' }).click()
  // 判断未选中状态
  await expect(
    page.getByRole('row', { name: '2 300 2016-07-08 12:36:22 深圳' }).locator('label input')
  ).not.toBeChecked()
})
