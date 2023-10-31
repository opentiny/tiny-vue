import { test, expect } from '@playwright/test'

test('自定义空数据文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#empty-text')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await expect(treeMenu.locator('.tiny-tree__empty-text')).toHaveText('空数据')
})
