import { test, expect } from '@playwright/test'

test('节点可勾选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#show-checkbox')

  const wrap = page.locator('#show-checkbox')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(0)
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')
  const node = treeNodeContent.filter({ hasText: /^首页$/ })
  const selectedClass = /is-checked/

  // 可勾选节点显示复选框且默认选中
  await expect(node.locator('.tiny-checkbox')).toBeVisible()
  await expect(treeNode.filter({ hasText: /^首页$/ })).toHaveClass(selectedClass)
  await expect(node.locator('.tiny-checkbox')).toHaveClass(selectedClass)
  await node.click()
  await expect(treeNode.filter({ hasText: /^首页$/ })).toHaveClass(/is-current/)

  // 父级选中, 子孙节点同时都选中
  await treeNodeContent
    .filter({ hasText: /^指南$/ })
    .locator('.tiny-checkbox')
    .click()
  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(treeNodeContent.filter({ hasText: /^指南$/ }).locator('.tiny-checkbox')).toHaveClass(selectedClass)
  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ }).locator('.tiny-checkbox')).toHaveClass(selectedClass)
  await expect(treeNodeContent.filter({ hasText: /^后端适配器$/ }).locator('.tiny-checkbox')).toHaveClass(selectedClass)

  await treeNodeContent.filter({ hasText: /^引入组件$/ }).click()
  await expect(treeNodeContent.filter({ hasText: /^按需引入$/ }).locator('.tiny-checkbox')).toHaveClass(selectedClass)
  await expect(treeNodeContent.filter({ hasText: /^完整引入$/ }).locator('.tiny-checkbox')).toHaveClass(selectedClass)

  // 子节点取消勾选, 祖先节点改变勾选状态
  await treeNodeContent
    .filter({ hasText: /^完整引入$/ })
    .locator('.tiny-checkbox')
    .click()
  await expect(
    treeNodeContent
      .filter({ hasText: /^引入组件$/ })
      .locator('.tiny-checkbox__input')
      .first()
  ).toHaveClass(/is-indeterminate/)
  await expect(
    treeNodeContent
      .filter({ hasText: /^指南$/ })
      .locator('.tiny-checkbox__input')
      .first()
  ).toHaveClass(/is-indeterminate/)
  await treeNodeContent
    .filter({ hasText: /^按需引入$/ })
    .locator('.tiny-checkbox')
    .click()
  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ }).locator('.tiny-checkbox__input')).not.toHaveClass(
    /is-indeterminate/
  )
  await expect(treeNode.filter({ hasText: /^引入组件/ })).not.toHaveClass(selectedClass)
  await expect(treeNode.filter({ hasText: /^按需引入$/ })).toHaveClass(/is-current/)
})

test('父子级不相关联', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#show-checkbox')

  const wrap = page.locator('#show-checkbox')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(1)
  const treeNode = treeMenu.locator('.tiny-tree-node__wrapper > .tiny-tree-node')
  const treeNodeContent = treeNode.locator('> .tiny-tree-node__content')

  // 父节点勾选不会改变子节点
  await treeNodeContent
    .filter({ hasText: /^指南$/ })
    .locator('.tiny-checkbox')
    .click()
  await expect(treeNode.filter({ hasText: /^指南/ })).toHaveClass(/is-current is-checked/)
  await treeNodeContent.filter({ hasText: /^指南$/ }).click()
  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ }).locator('.tiny-checkbox')).not.toHaveClass(
    /is-checked/
  )
  await expect(treeNodeContent.filter({ hasText: /^构建部署$/ }).locator('.tiny-checkbox')).not.toHaveClass(
    /is-checked/
  )

  // 子节点勾选不改变父节点
  await treeNodeContent.filter({ hasText: /^引入组件$/ }).click()
  await expect(treeNode.filter({ hasText: /^引入组件/ })).toHaveClass(/is-current is-focusable is-expanded/)
  await expect(treeNode.filter({ hasText: /^引入组件/ })).not.toHaveClass(/is-checked/)
  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ }).locator('.tiny-checkbox')).not.toHaveClass(
    /is-checked/
  )
  await treeNodeContent
    .filter({ hasText: /^按需引入$/ })
    .locator('.tiny-checkbox')
    .click()
  await treeNodeContent
    .filter({ hasText: /^完整引入$/ })
    .locator('.tiny-checkbox')
    .click()
  await expect(treeNodeContent.filter({ hasText: /^按需引入$/ }).locator('.tiny-checkbox')).toHaveClass(/is-checked/)
  await expect(treeNodeContent.filter({ hasText: /^完整引入$/ }).locator('.tiny-checkbox')).toHaveClass(/is-checked/)
  await expect(treeNodeContent.filter({ hasText: /^引入组件$/ }).locator('.tiny-checkbox')).not.toHaveClass(
    /is-checked/
  )
})
