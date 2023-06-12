import { test, expect } from '@playwright/test'

test('自定义空数据文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree-menu/empty-text')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await expect(treeMenu).toHaveText('空数据')
})