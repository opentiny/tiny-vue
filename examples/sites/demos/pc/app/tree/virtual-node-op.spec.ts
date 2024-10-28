import { test, expect } from '@playwright/test'

test('测试虚拟tree的增删改', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#virtual-node-op')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree')
  const insertBefore = preview.getByText('添加前节点')
  const insertAfter = preview.getByText('添加后节点')
  const append = preview.getByText('添加子节点')
  const updateKeyChildren = preview.getByText('更新子节点')
  const remove = preview.getByText('删除当前节点')
  const vScroll = tree.locator('.tiny-virtual-scroll')
  const scrollItem = vScroll.locator('.virtual-scroll-item')

  await expect(scrollItem.nth(0)).toHaveText('数据 0')

  await insertBefore.click()
  await expect(tree.getByText('insertBefore 1000')).toHaveCount(1)
  await page.waitForTimeout(20)

  await insertAfter.click()
  await expect(tree.getByText('insertAfter 1001')).toHaveCount(1)
  await page.waitForTimeout(20)

  await append.click()
  await expect(tree.getByText('append 1002')).toHaveCount(1)
  await page.waitForTimeout(20)

  await updateKeyChildren.click()
  await expect(tree.getByText('update 1003')).toHaveCount(1)
  await page.waitForTimeout(20)

  await remove.click()
  await expect(tree.getByText('数据 1')).toHaveCount(0)
})
