import { test, expect } from '@playwright/test'

test('节点的展开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#expand-control')

  const tree = page.locator('.pc-demo-container')
  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)
})
