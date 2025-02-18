import { test, expect } from '@playwright/test'

test('折叠标签 collapse-tags', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#collapse-tags')
  const wrap = page.locator('#collapse-tags')
  const select = wrap.locator('.tiny-tree-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const tag = select.locator('.tiny-tag')
  const treeNode = dropdown.locator('.tiny-tree-node')
  const checkedTreeNodes = dropdown.locator('.tiny-tree-node.is-checked')

  // 验证默认值的折叠标签显示
  await expect(tag).toHaveCount(2)
  await expect(tag.filter({ hasText: '三级 1-1-1' })).toBeVisible()
  await expect(tag.filter({ hasText: '+ 1' })).toBeVisible()

  // 点击下拉后选中效果
  await tag.first().click()
  await expect(checkedTreeNodes).toHaveCount(2)
  await expect(treeNode.nth(2)).toHaveClass(/is-checked/)
  await expect(treeNode.nth(6)).toHaveClass(/is-checked/)

  // 取消选中一个
  await page.getByRole('treeitem', { name: '三级 1-1-1' }).locator('path').nth(1).click()
  await expect(tag.filter({ hasText: '+ 1' })).toBeHidden()
  await expect(tag).toHaveCount(1)

  // 再选中 2 个
  await page.getByRole('treeitem', { name: '三级 1-1-1' }).locator('path').nth(1).click()
  await page.getByRole('treeitem', { name: '三级 1-1-2' }).locator('path').nth(1).click()
  await expect(tag.filter({ hasText: '+ 4' })).toBeVisible()
  await expect(tag).toHaveCount(2)
})
