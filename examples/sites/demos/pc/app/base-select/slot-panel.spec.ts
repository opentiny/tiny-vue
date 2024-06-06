import { expect, test } from '@playwright/test'

test('custom-panel', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#slot-panel')

  const wrap = page.locator('#slot-panel')
  const select = wrap.locator('.tiny-base-select').nth(0)
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
