import { test, expect } from '@playwright/test'

test('节点操作', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#node-op')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree')

  const insertBefore = preview.getByText('添加前节点')
  const insertAfter = preview.getByText('添加后节点')
  const append = preview.getByText('添加子节点')
  const updateKeyChildren = preview.getByText('更新子节点')
  const remove = preview.getByText('删除当前节点')

  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)

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
  await expect(tree.getByText('数据 1-1')).toHaveCount(0)
})
