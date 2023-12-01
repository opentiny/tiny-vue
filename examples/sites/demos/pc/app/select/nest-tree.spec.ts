import { test, expect } from '@playwright/test'

test('下拉树单选', async ({ page }) => {
  await page.goto('select#nest-tree')

  const wrap = page.locator('#nest-tree')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-input__suffix .tiny-select__caret')
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

test('下拉树多选', async ({ page }) => {
  await page.goto('select#nest-tree')

  const wrap = page.locator('#nest-tree')
  const select = wrap.locator('.tiny-select').nth(1)

  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-input__suffix .tiny-select__caret')
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

test('下拉树可搜索', async ({ page }) => {
  await page.goto('select#nest-tree')

  const wrap = page.locator('#nest-tree')
  const select = wrap.locator('.tiny-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const treeNode = dropdown.locator('.tiny-tree-node')
  const hiddenTreeNodes = dropdown.locator('.tiny-tree-node.is-hidden')
  const checkedTreeNodes = dropdown.locator('.tiny-tree-node.is-current')

  await expect(input).toHaveValue('')
  await expect(dropdown).toBeHidden()

  await input.click()
  await expect(treeNode).toHaveCount(7)

  await input.fill('2-')
  await input.press('Enter')
  await expect(hiddenTreeNodes).toHaveCount(4)
  await expect(checkedTreeNodes).toHaveCount(0)

  await treeNode.getByText(/^一级 2$/).click()
  await expect(dropdown).toBeHidden()
  await expect(input).toHaveValue('一级 2')

  await input.click()
  await expect(checkedTreeNodes.locator('.tiny-tree-node__content').nth(0)).toHaveText(/^一级 2$/)
})
