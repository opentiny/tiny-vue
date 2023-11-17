import { test, expect } from '@playwright/test'

test('文字超长省略显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#text-ellipsis')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await expect(treeMenu.locator('.tiny-tree')).toHaveClass(/tiny-tree-menu__overflow/)
})
