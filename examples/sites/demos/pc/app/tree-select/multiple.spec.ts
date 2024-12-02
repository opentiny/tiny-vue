import { test, expect } from '@playwright/test'

test('下拉树多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#multiple')

  const wrap = page.locator('#multiple')
  const select = wrap.locator('.tiny-tree-select').nth(0)

  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-input__suffix .tiny-base-select__caret')
  const treeNode = dropdown.locator('.tiny-tree-node')
  const checkedTreeNodes = dropdown.locator('.tiny-tree-node.is-checked')
  const tag = select.locator('.tiny-tag')

  await expect(tag).toHaveCount(2)

  await suffixSvg.click()
  await expect(checkedTreeNodes).toHaveCount(2)
  await expect(treeNode).toHaveCount(7)
  await page
    .locator('div')
    .filter({ hasText: /^一级 2$/ })
    .locator('.tiny-checkbox')
    .click()

  await expect(checkedTreeNodes).toHaveCount(4)
  await expect(tag).toHaveCount(4)
})
