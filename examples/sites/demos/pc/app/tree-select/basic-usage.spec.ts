import { expect, test } from '@playwright/test'

test('下拉树单选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#basic-usage')

  const wrap = page.locator('#basic-usage')
  const select = wrap.locator('.tiny-tree-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-input__suffix .tiny-base-select__caret')
  const treeNode = dropdown.locator('.tiny-tree-node')

  await expect(suffixSvg).toHaveCount(1)
  await expect(suffixSvg).toBeVisible()
  await expect(input).toHaveValue('三级 1-1-2')

  await input.click()
  await expect(treeNode.filter({ hasText: /^三级 1-1-2$/ })).toHaveClass(/is-current/)

  await treeNode.filter({ hasText: /^二级 2-1$/ }).click()
  await expect(input).toHaveValue('二级 2-1')
  await input.click()
  await expect(treeNode.filter({ hasText: /^二级 2-1$/ })).toHaveClass(/is-current/)
})
