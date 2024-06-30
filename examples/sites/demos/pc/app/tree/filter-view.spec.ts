import { test, expect } from '@playwright/test'

test('测试过滤视图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#filter-view')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree').nth(0)
  const btnPlain = preview.getByText('平铺视图 plain')
  const checkboxs = tree.locator('.tiny-tree__plain-node .tiny-checkbox')
  const input = preview.locator('.tiny-input input')

  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)

  await btnPlain.click()
  await expect(checkboxs).toHaveCount(9)
  await page.waitForTimeout(20)

  await input.fill('1-1')
  await expect(checkboxs).toHaveCount(3)
})
