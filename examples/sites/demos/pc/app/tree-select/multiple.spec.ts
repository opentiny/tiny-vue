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

  // 初始状态，输入框中选中2个标签
  await expect(tag).toHaveCount(2)

  // 展开下拉面板，树节点中共有7个节点，选中的节点有2个
  await suffixSvg.click()
  await expect(checkedTreeNodes).toHaveCount(2)
  await expect(treeNode).toHaveCount(7)

  // 下拉面板中选中“二级 2”节点，此时下拉面板中选中的节点和输入框中选中的标签有4个
  await page.getByRole('treeitem', { name: '一级 2' }).getByRole('checkbox').first().click()
  await expect(checkedTreeNodes).toHaveCount(4)
  await expect(tag).toHaveCount(4)

  // 下拉面板中选中“三级 1-1-2”节点，此时下拉面板中选中的节点有7个
  await page.getByRole('treeitem', { name: '三级 1-1-2' }).locator('path').nth(1).click()
  await expect(checkedTreeNodes).toHaveCount(7)
  await expect(tag).toHaveCount(7)

  // 在输入框中取消选中“三级 1-1-2”节点，此时下拉面板中选中的节点和输入框中选中的标签有4个
  await tag.filter({ hasText: '三级 1-1-2' }).locator('.tiny-tag__close').click()
  await expect(checkedTreeNodes).toHaveCount(4)
  await expect(tag).toHaveCount(4)

  // 下拉面板中选中“三级 1-1-2”节点，然后在输入框中取消选中“一级 1”节点，此时下拉面板中选中的节点和输入框中选中的标签有3个
  await page.getByRole('treeitem', { name: '三级 1-1-2' }).locator('path').nth(1).click()
  await tag.filter({ hasText: '一级 1' }).locator('.tiny-tag__close').click()
  await expect(checkedTreeNodes).toHaveCount(3)
  await expect(tag).toHaveCount(3)
})
