import { test, expect } from '@playwright/test'

test('手动隐藏显示列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom#custom-hide-column')
  await page.locator('#custom-hide-column').getByText('手动隐藏显示列').click()
  await page.getByRole('button', { name: '隐藏 布尔值 列' }).click()
  await expect(page.getByRole('cell', { name: '布尔值' })).not.toBeVisible()
  await page.getByRole('button', { name: '隐藏 布尔值 列' }).click()
  await expect(page.getByRole('cell', { name: '布尔值' })).toBeVisible()
})
