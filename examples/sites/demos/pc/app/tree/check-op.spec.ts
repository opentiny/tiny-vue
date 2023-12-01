import { test, expect } from '@playwright/test'

test('多选的勾选 ', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#check-op')

  const tree = page.locator('.pc-demo-container .tiny-tree')
  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)
})
