import { test, expect } from '@playwright/test'

test('props 选项映射', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#basic-usage')
  const preview = page.locator('#preview')
  const nodes = preview.locator('.tiny-toggle-menu .tiny-tree > div')
  // 点击文字展开
  await preview.getByTitle('更新日志').click()
  // 点击文字展开
  await preview.getByTitle('开发指南').hover()
  // “更新日志”应该被选中
  await expect(nodes.first().locator('.tiny-tree-node__content')).toHaveCSS('background-color', 'rgb(94, 124, 224)')

  // 点击文字展开
  await preview.getByTitle('开发指南').click()
  // 子菜单应该可见
  await expect(nodes.nth(1).locator('.tiny-tree-node__children')).toBeVisible()
})
