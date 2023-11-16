import { test, expect } from '@playwright/test'

test('展开后渲染', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#render-after-expand')

  // 非展开渲染, 子节点存在dom中, 被隐藏
  const childNode = page.getByRole('treeitem', { name: '二级 1-1', includeHidden: true })
  await expect(childNode).toBeHidden(0)
})
