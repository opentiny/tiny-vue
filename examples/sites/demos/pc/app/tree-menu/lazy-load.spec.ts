import { test, expect } from '@playwright/test'

test('懒加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#lazy-load')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('表单组件', { exact: true }).click()
  await expect(treeMenu.getByTitle('表单组件1')).not.toBeVisible()
  // 等到异步加载完成
  await page.waitForTimeout(600)
  await expect(treeMenu.getByTitle('表单组件1')).toBeVisible()
})
