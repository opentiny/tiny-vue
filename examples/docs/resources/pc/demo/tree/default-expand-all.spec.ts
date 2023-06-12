import { test, expect } from '@playwright/test';

test('初始化展开所有节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/default-expand-all');

  const expandClass = /is-expanded/
  await expect(page.getByRole('treeitem', { name: '一级 1' })).toHaveClass(expandClass)
  await expect(page.getByRole('treeitem', { name: '二级 1-1' })).toHaveClass(expandClass)
  await expect(page.getByRole('treeitem', { name: '三级 1-1-1' })).toHaveClass(expandClass)
  await expect(page.getByRole('treeitem', { name: '二级 2-1' })).toHaveClass(expandClass)
  await expect(page.getByRole('treeitem', { name: '二级 1-1' })).toHaveClass(expandClass)
});