import { test, expect } from '@playwright/test'

test('判断展示的已勾选数据和所有数据的比值是否正确', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#checked-format-text')
  const preview = page.locator('#preview')
  await preview.locator('label').filter({ hasText: '备选项 2' }).locator('span').nth(1).click()
  await preview.locator('label').filter({ hasText: '备选项 3' }).locator('span').nth(1).click()
  await expect(preview.getByRole('paragraph').filter({ hasText: '列表 1 2/14' })).toHaveCount(1)
})
