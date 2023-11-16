import { test, expect } from '@playwright/test'

test('默认展开某节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#default-expanded-keys-highlight')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  const node = treeMenu.locator('.tiny-tree-node').filter({ hasText: '按需引入' }).nth(2)

  await page.getByRole('button', { name: 'highlight' }).click()
  await expect(node).toHaveClass(/is-current/)
})
