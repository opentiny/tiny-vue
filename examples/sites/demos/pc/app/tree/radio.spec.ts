import { test, expect } from '@playwright/test'

test('测试单选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#radio')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree').nth(0)
  const treeChecked = tree.locator('label.is-checked')
  const btn = preview.getByText('勾选指定节点')

  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)
  await expect(treeChecked).toHaveCount(1)
  await btn.click()
})
