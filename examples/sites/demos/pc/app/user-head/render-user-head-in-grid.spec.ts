import { test, expect } from '@playwright/test'

test('Grid 单元格展示头像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#render-user-head-in-grid')
  const iconBox = page.getByRole('cell', { name: '800 GFD科技YX公司' }).locator('svg')
  await expect(iconBox).toBeVisible()
  const iconBox1 = page.getByRole('cell', { name: '300 WWW科技YX公司' }).locator('svg')
  await expect(iconBox1).toBeVisible()
})
