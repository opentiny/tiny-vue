import { test, expect } from '@playwright/test'

test('默认展开指定节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#default-expanded-keys')

  const expandClass = /is-expanded/
  await expect(page.getByRole('treeitem', { name: '一级 1' }).first()).toHaveClass(expandClass)
  await expect(page.getByRole('treeitem', { name: '二级 1-1' }).first()).toHaveClass(expandClass)
  await expect(page.getByRole('treeitem', { name: '一级 2' }).first()).not.toHaveClass(expandClass)
  await expect(page.getByRole('treeitem', { name: '一级 3' }).first()).not.toHaveClass(expandClass)
  await expect(page.getByRole('treeitem', { name: '三级 1-1-1' }).first()).toHaveCount(1)
  await expect(page.getByRole('treeitem', { name: '二级 2-1' }).first()).toHaveCount(0)
  await expect(page.getByRole('treeitem', { name: '二级 3-1' }).first()).toHaveCount(0)
})
