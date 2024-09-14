import { test, expect } from '@playwright/test'

test('测试自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#icons')

  const preview = page.locator('.pc-demo-container')
  const tree1 = preview.locator('.tiny-tree').nth(0)
  const tree2 = preview.locator('.tiny-tree').nth(1)

  const icon1 = tree1.locator('svg path').nth(0)
  const icon2 = tree2.locator('svg').nth(0)

  // 测试tree1
  await expect(tree1.getByText('数据 2')).toHaveCount(1)
  await expect(icon2).toHaveClass(/tiny-tree-node__expand-icon/)

  // 测试tree2
  await expect(tree2.getByText('数据 2')).toHaveCount(1)
  await expect(icon2).toHaveClass(/tiny-tree-node__expand-icon/)
})
