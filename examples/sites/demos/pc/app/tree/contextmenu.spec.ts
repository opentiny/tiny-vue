import { test, expect } from '@playwright/test'

test('测试右键菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#contextmenu')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree').nth(0)
  const node = tree.getByText('数据 1-1-1')
  await expect(node).toHaveCount(1)

  await node.click({ button: 'right' })
  await page.waitForTimeout(20)
  await expect(tree.getByText('更新')).toHaveCount(1)
})
