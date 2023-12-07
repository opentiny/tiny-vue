import { test, expect } from '@playwright/test'

test('默认展开某节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#default-expanded-keys-highlight')

  const wrap = page.locator('#default-expanded-keys-highlight')
  const treeMenu = wrap.locator('.tiny-tree-menu')
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')

  await expect(treeNode.filter({ hasText: /^Button 按钮$/ })).toHaveClass(/is-current/)
  await wrap.getByRole('button', { name: '设置展开并高亮' }).click()
  await expect(treeNode.filter({ hasText: /^页面布局/ })).toHaveClass(/is-current/)
})
