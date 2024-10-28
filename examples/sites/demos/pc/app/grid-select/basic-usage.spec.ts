import { expect, test } from '@playwright/test'

test('测试基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#basic-usage')

  const wrap = page.locator('#basic-usage')
  const select = wrap.locator('.tiny-tree-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const treeNode = dropdown.locator('.tiny-tree-node')

  await input.click()
  await expect(treeNode).toHaveCount(7)

  await treeNode.filter({ hasText: /^二级 2-1$/ }).click()
  await expect(input).toHaveValue('二级 2-1')
  await input.click()
  await expect(treeNode.filter({ hasText: /^二级 2-1$/ })).toHaveClass(/is-current/)
})
