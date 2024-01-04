import { test, expect } from '@playwright/test'

test('测试懒加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#lazy')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree').nth(0)
  const node2 = tree.getByText('#数据 2')

  await expect(node2).toHaveCount(1)
  await node2.click()
  await page.waitForTimeout(20)
  await expect(node2).toHaveCount(6)
})
