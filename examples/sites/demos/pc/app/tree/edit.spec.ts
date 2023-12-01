import { test, expect } from '@playwright/test'

test('编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#edit')

  const tree = page.locator('.pc-demo-container')
  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)
})
