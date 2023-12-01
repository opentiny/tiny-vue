import { test, expect } from '@playwright/test'

test('节点可勾选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#show-checkbox')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  const node = treeMenu.getByRole('treeitem', { name: '首页' })
  const selectedClass = /is-checked/
  await expect(node.locator('.tiny-tree-node__content .tiny-checkbox')).toBeVisible()
  await page.getByRole('treeitem', { name: '首页' }).locator('.tiny-checkbox').click()
  await expect(node).toHaveClass(/is-current/)
  await expect(node.locator('.tiny-tree-node__content .tiny-checkbox')).toHaveClass(selectedClass)

  // 父级选中, 子孙节点同时都选中
  await page.getByRole('treeitem', { name: '指南', exact: true }).locator('.tiny-checkbox').click()
  await treeMenu.getByRole('treeitem', { name: '指南' }).click()
  await expect(treeMenu.getByRole('treeitem', { name: '引入组件' }).first().locator('.tiny-checkbox')).toHaveClass(
    selectedClass
  )
  await expect(treeMenu.getByRole('treeitem', { name: '后端适配器' }).first().locator('.tiny-checkbox')).toHaveClass(
    selectedClass
  )
  await treeMenu.getByRole('treeitem', { name: '引入组件' }).first().click()
  await expect(
    treeMenu.getByRole('treeitem', { name: '按需引入' }).first().locator('.tiny-checkbox').first()
  ).toHaveClass(selectedClass)

  // 子节点取消勾选, 祖先节点改变勾选状态
  await treeMenu.getByRole('treeitem', { name: '按需引入' }).first().locator('.tiny-checkbox').first().click()
  await expect(
    treeMenu.getByRole('treeitem', { name: '引入组件' }).first().locator('.tiny-checkbox__input').first()
  ).toHaveClass(/is-indeterminate/)
  await expect(treeMenu.getByRole('treeitem', { name: '指南' }).locator('.tiny-checkbox__input').first()).toHaveClass(
    /is-indeterminate/
  )
  await treeMenu.getByRole('treeitem', { name: '完整引入' }).first().locator('.tiny-checkbox').first().click()
  await expect(
    treeMenu.getByRole('treeitem', { name: '引入组件' }).first().locator('.tiny-checkbox__input').first()
  ).not.toHaveClass(/is-indeterminate/)
})


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

test('可勾选节点默认选中', async ({ page }) => {
})
