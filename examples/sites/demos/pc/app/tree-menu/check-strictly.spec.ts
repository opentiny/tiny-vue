import { test, expect } from '@playwright/test'

test('父子级不相关联', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#check-strictly')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  const checkedClass = /is-checked/

  // 父节点勾选不会改变子节点
  await treeMenu.getByRole('treeitem', { name: '指南' }).locator('svg').first().click()
  await expect(treeMenu.getByRole('treeitem', { name: '引入组件' }).locator('svg').first()).not.toHaveClass(
    checkedClass
  )
  await expect(page.getByRole('treeitem', { name: '构建部署' }).first().locator('span').nth(1)).not.toHaveClass(
    checkedClass
  )

  // 子节点勾选不改变父节点
  await page.getByRole('treeitem', { name: '引入组件' }).first().click()
  await page.getByRole('treeitem', { name: '按需引入' }).locator('span').nth(2).click()
  await page.getByRole('treeitem', { name: '完整引入' }).locator('span').nth(2).click()
  await expect(page.getByRole('treeitem', { name: '引入组件' }).locator('span').nth(1)).not.toHaveClass(checkedClass)
})
