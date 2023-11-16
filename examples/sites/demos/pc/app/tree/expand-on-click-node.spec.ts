import { test, expect } from '@playwright/test'

test('点击节点展开收缩', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#expand-on-click-node')

  const expandedClass = /is-expanded/
  const rootNode = page
    .locator('div')
    .filter({ hasText: /^一级 1$/ })
    .first()
  const mediumNode = page.getByRole('treeitem', { name: '二级 1-1' }).first()
  const leafNode = page.getByRole('treeitem', { name: '三级 1-1-1' }).first()

  // 点击收缩
  await rootNode.click()
  await expect(mediumNode).toBeHidden({ timeout: 0 })
  await expect(leafNode).toBeHidden({ timeout: 0 })

  // 点击展开
  await rootNode.click()
  await expect(mediumNode).toHaveClass(expandedClass)
  await expect(leafNode).toHaveClass(expandedClass)
})
