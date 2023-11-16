import { test, expect } from '@playwright/test'

test('唯一标识', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#node-key')

  const tree = page.locator('#preview .tiny-tree')
  const currentClass = /is-current/

  await page.getByRole('button', { name: '设置当前选中的节点的 key' }).click()
  await expect(tree.locator('.tiny-tree-node').filter({ hasText: '二级 2-1' }).nth(1)).toHaveClass(currentClass)
  await page.getByRole('button', { name: '设置当前选中的节点', exact: true }).click()
  await expect(tree.locator('.tiny-tree-node').filter({ hasText: '三级 1-1-2' }).nth(2)).toHaveClass(currentClass)

  await page.getByText('三级 1-1-1').click()
  await page.getByRole('button', { name: '获取当前被选中节点的 key' }).click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]/div[1]')).toContainText('9')

  await page.getByRole('button', { name: '获得当前选中的节点' }).click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]/div[2]')).toContainText('"id": 9')

  const newNode1 = page.locator(
    '//*[@id="preview"]/div[2]/div[2]/div/div[5]/div[1]/div/div[2]/div/div/div[2]/div[3]/div'
  )
  await expect(newNode1).toHaveCount(0)
  await page.getByRole('button', { name: '为 Tree 中的一个节点追加一个子节点' }).click()
  await expect(newNode1).toHaveCount(1)

  const newNode2 = page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[5]/div[4]/div')
  await expect(newNode2).toHaveCount(0)
  await page.getByRole('button', { name: '根据节点数据在父节点下插入一个子节点' }).click()
  await expect(newNode2).toHaveCount(1)

  const newNode3 = page.getByRole('treeitem', { name: '一级 5' })
  await expect(newNode3).toHaveCount(0)
  await page.getByRole('button', { name: '为 Tree 的一个节点的前面增加一个节点' }).click()
  await expect(newNode3).toHaveCount(1)

  const node = page
    .locator('div')
    .filter({ hasText: /^一级 2$/ })
    .first()
  await expect(node).toBeVisible()
  await page.getByRole('button', { name: '删除节点' }).click()
  await expect(node).not.toBeVisible()
})
