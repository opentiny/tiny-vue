import { test, expect } from '@playwright/test'

test('节点过滤', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#filter-node')

  await page.getByPlaceholder('输入关键字进行过滤').first().click()
  await page.getByPlaceholder('输入关键字进行过滤').first().locator('input').fill('1')
  const validNodeCount = await page.locator('#preview .tiny-tree-node').filter({ hasText: '1' }).count()
  await expect(validNodeCount).toBeGreaterThan(0)
  await expect(page.getByRole('treeitem', { name: '二级 2-2' })).not.toBeVisible()
})
