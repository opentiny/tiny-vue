import { test, expect } from '@playwright/test'

test('text-wrap 文字超长换行显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#text-wrap')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await expect(treeMenu.locator('.tiny-tree')).toHaveClass(/tiny-tree-menu__wrap/)
})
