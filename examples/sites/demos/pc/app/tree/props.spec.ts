import { test, expect } from '@playwright/test'

test('测试自定义映射列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#props')

  const tree = page.locator('.pc-demo-container')
  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)

  // 测试disabled
  await expect(tree.getByText('数据 2-2')).toHaveCSS('color', 'rgb(194, 194, 194)')
})
