import { test, expect } from '@playwright/test'

test('父子节点互不关联', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#check-strictly')

  const checkedClass = /is-checked/
  const tree = page.locator('#preview .tiny-tree')
  const nodes = tree.locator('.tiny-tree-node')
  const parantNode1 = nodes.nth(1)
  const childNodes1 = [
    nodes.nth(2).locator('.tiny-checkbox__input').first(),
    nodes.nth(3).locator('.tiny-checkbox__input').first()
  ]
  const parantNode2 = nodes.nth(4)
  const childNodes2 = [
    page.getByRole('treeitem', { name: '二级 2-1' }).first().locator('.tiny-checkbox__input').nth(1),
    page.getByRole('treeitem', { name: '二级 2-2' }).first().locator('.tiny-checkbox__input').nth(1)
  ]
  const parantNode3 = nodes.nth(7)
  const childNodes3 = [page.getByRole('treeitem', { name: '二级 3-1' }).first().locator('.tiny-checkbox__input').nth(1)]

  // 子节点选中不影响父节点
  await childNodes1[0].click()
  await childNodes1[1].click()
  await expect(parantNode1).not.toHaveClass(checkedClass)

  // 子节点取消选中, 不影响父节点
  await parantNode1.locator('.tiny-checkbox__input').first().click()
  await childNodes1[0].click()
  await childNodes1[1].click()
  await expect(parantNode1).toHaveClass(checkedClass)

  // 父节点选中, 子节点不变
  await parantNode2.locator('.tiny-checkbox__input').first().click()
  await expect(childNodes2[0]).not.toHaveClass(checkedClass)
  await expect(childNodes2[1]).not.toHaveClass(checkedClass)
  await childNodes3[0].click()
  await parantNode3.click()
  await expect(childNodes3[0]).toHaveClass(checkedClass)

  // 父节点取消选中, 子节点不变
  await childNodes1[0].click()
  await childNodes1[1].click()
  await parantNode1.click()
  await expect(childNodes1[0]).toHaveClass(checkedClass)
  await expect(childNodes1[1]).toHaveClass(checkedClass)
})
