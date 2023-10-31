import { test, expect } from '@playwright/test'

test('数据节点属性配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#node-props-config')

  await expect(page.locator('#preview .tiny-tree-node__content').first()).toHaveText('一级 1')
  const childCount = await page
    .getByRole('treeitem', { name: '一级 1' })
    .locator('.tiny-tree-node__children .tiny-tree-node__content')
    .count()
  expect(childCount).toBeGreaterThan(0)
})
