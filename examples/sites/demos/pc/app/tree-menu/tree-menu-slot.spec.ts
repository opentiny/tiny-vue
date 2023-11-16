import { test, expect } from '@playwright/test'

test('插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#tree-menu-slot')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await expect(treeMenu.getByText('首页')).toHaveClass('treeClass')
  await expect(treeMenu.getByText('指南')).toHaveClass('treeNodeClass')
  await expect(treeMenu.getByTitle('首页').locator('.tiny-svg')).toHaveCSS('margin-right', '4px')
  await expect(treeMenu.getByTitle('教程').locator('.tiny-svg')).toHaveCSS('margin-left', '-20px')
})
