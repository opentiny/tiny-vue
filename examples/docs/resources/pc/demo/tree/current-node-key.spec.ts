import { test, expect } from '@playwright/test';

test('当前选中节点标志', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/current-node-key')

  const selectedNodeClass = /is-current/
  await expect(page.getByRole('treeitem', { name: '一级 2' })).toHaveClass(selectedNodeClass)
  await expect(page.getByRole('treeitem', { name: '一级 1' })).not.toHaveClass(selectedNodeClass)
  await expect(page.getByRole('treeitem', { name: '二级 2-1' })).not.toHaveClass(selectedNodeClass)
  await expect(page.getByRole('treeitem', { name: '二级 3-2' })).not.toHaveClass(selectedNodeClass)
});