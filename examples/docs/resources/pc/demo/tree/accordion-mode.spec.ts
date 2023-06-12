import { test, expect } from '@playwright/test';

test('手风琴模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree/accordion-mode')

  await expect(page.getByRole('treeitem', { name: '二级 1-1' })).toBeVisible()
  await expect(page.getByRole('treeitem', { name: '二级 2-1' })).not.toBeVisible()
  await expect(page.getByRole('treeitem', { name: '二级 3-1' })).not.toBeVisible()
  await page.getByText('一级 2').click()
  await expect(page.getByRole('treeitem', { name: '三级 2-1-1' })).toBeVisible()
  await expect(page.getByRole('treeitem', { name: '三级 2-2-1' })).not.toBeVisible()
});