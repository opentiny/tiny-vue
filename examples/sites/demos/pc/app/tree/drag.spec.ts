import { test, expect } from '@playwright/test'

test('测试拖拽节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#drag')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree').nth(0)
  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)

  await tree.getByText('数据 2-1').dragTo(tree.getByText('数据 1-1-1'))
  await page.waitForTimeout(100)
  await tree.getByText('数据 1-1-1').dragTo(tree.getByText('数据 2-2'))
  await page.waitForTimeout(100)
})
