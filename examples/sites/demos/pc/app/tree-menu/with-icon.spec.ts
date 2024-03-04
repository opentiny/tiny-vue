import { test, expect } from '@playwright/test'

test('节点配置带图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#with-icon')

  const treeMenu = page.locator('#with-icon .tiny-tree-menu')
  const treeMenuSvg = page.locator('.tree-node-name svg')

  await expect(treeMenu.getByText('首页')).toBeVisible()
  await expect(treeMenuSvg.nth(0)).toBeVisible()
})
