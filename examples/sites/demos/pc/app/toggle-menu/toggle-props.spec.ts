import { test, expect } from '@playwright/test'

test('props 选项映射', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#basic-usage')
  const nodes = page.locator('.tiny-toggle-menu .tiny-tree > div')
  // 点击文字展开
  // 点击文字展开
  await page.getByTitle('开发指南').click()
  // 子菜单应该可见
  await expect(nodes.nth(1).locator('.tiny-tree-node__children')).toBeVisible()
})
