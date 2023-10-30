import { test, expect } from '@playwright/test'

test('自定义菜单左侧图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#custom-icon')
  const preview = page.locator('#preview')
  const nodes = preview.locator('.tiny-toggle-menu .tiny-tree > div')
  const svg = preview.getByRole('treeitem', { name: '开发指南' }).locator('svg')
  await expect(svg.locator('path').first()).not.toHaveAttribute('d', /^M7 21c.2 0 .5-.1.6-.2l9/)
  await svg.click()
  // 子菜单应该可见
  await expect(nodes.nth(1).locator('.tiny-tree-node__children')).toBeVisible()
})
