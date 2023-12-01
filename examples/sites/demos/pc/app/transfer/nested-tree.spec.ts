import { test, expect } from '@playwright/test'

test('嵌套树', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#nested-tree')
  const preview = page.locator('.pc-demo-container')
  await preview.getByRole('treeitem', { name: '一级 1' }).locator('svg').first().click()
  await preview.getByRole('treeitem', { name: '一级 1' }).getByText('二级 1-1').click()
  await preview.getByRole('treeitem', { name: '三级 1-1-1' }).locator('span').nth(2).click()

  await expect(preview.getByText('三级 1-1-1')).toHaveCount(1)
})
