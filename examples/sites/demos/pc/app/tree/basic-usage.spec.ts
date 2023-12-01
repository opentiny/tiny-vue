import { test, expect } from '@playwright/test'

test('tree组件基本使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#basic-usage')

  const tree = page.locator('.pc-demo-container .tiny-tree')
  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)
})
