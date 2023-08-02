import { test, expect } from '@playwright/test'

test('默认展开所有节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/toggle-menu/default-expand-all')
  const preview = page.locator('#preview')
  // 默认所有的节点都可见
  await expect(preview.locator('.tiny-tree .tiny-tree-node:visible')).toHaveCount(14)
  await page.getByTitle('开发指南').click()
  await expect(preview.locator('.tiny-tree .tiny-tree-node:visible')).toHaveCount(11)
  await page.getByTitle('表单组件').nth(1).click()
  await expect(preview.locator('.tiny-tree .tiny-tree-node:visible')).toHaveCount(9)
})
