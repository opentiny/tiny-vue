import { test, expect } from '@playwright/test'

test.describe('节点编辑', () => {
  test('编辑节点内容', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tree#edit')

    const tree = page.locator('#preview .tiny-tree')
    const node = tree.locator('.tiny-tree-node').first()
    const nodeLeft = node.locator('.tiny-tree-node__content-left').first()
    const nodeRight = node.locator('.tiny-tree-node__content-right').first()

    await page.getByRole('button', { name: '进入编辑' }).click()
    await expect(nodeRight.getByTitle('编辑')).toBeVisible()
    await nodeRight.getByTitle('编辑').click()
    await expect(nodeLeft.locator('.tiny-input')).toBeVisible()
    await expect(nodeLeft.locator('.tiny-input input')).toHaveValue('一级 1')
    await nodeLeft.locator('.tiny-input input').fill('aaa')
    await nodeLeft.locator('.tiny-input input').blur()
    await expect(node.locator('.tiny-tree-node__label').first()).toHaveText('aaa')
  })

  test('进入编辑状态后删除节点', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tree#edit')

    const tree = page.locator('#preview .tiny-tree')
    const node = tree.locator('.tiny-tree-node').first()
    const delBtn = node.locator('.tiny-tree-node__content-right > span:nth-child(2) > .tiny-svg').first()
    const delPopover = page.locator('.tiny-tree__del-popover').nth(1)
    await page.getByRole('button', { name: '进入编辑' }).click()
    await delBtn.click()
    await expect(delPopover).toBeVisible()

    // 连同子孙节点一起删除
    await delPopover.getByRole('button', { name: '确定' }).click()
    await expect(node).not.toContainText('一级 1')
    await expect(tree.locator('.tiny-tree-node')).toHaveCount(2)

    // 保留子孙节点
    await delBtn.click()
    await delPopover.locator('.tiny-checkbox').click()
    await delPopover.getByRole('button', { name: '确定' }).click()
    await expect(node.locator('.tiny-tree-node__label')).toHaveText('一级 3')
    await expect(tree.locator('.tiny-tree-node')).toHaveCount(3)
  })

  test('进入编辑状态后新增子节点', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tree#edit')

    const tree = page.locator('#preview .tiny-tree')
    const nodes = tree.locator('.tiny-tree-node')
    const node = nodes.first()
    const newNode = nodes.filter({ hasText: 'aaa' }).first()

    await page.getByRole('button', { name: '进入编辑' }).click()
    await node.getByTitle('新增下级').first().click()
    await node.getByRole('textbox').fill('aaa')
    await node.getByRole('textbox').blur()
    await expect(newNode).toBeVisible()
  })

  test('取消编辑', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tree#edit')

    const tree = page.locator('#preview .tiny-tree')
    const nodes = tree.locator('.tiny-tree-node')
    const node = nodes.first()
    const delBtn = node.locator('.tiny-tree-node__content-right > span:nth-child(2) > .tiny-svg').first()
    const delPopover = page.locator('.tiny-tree__del-popover').nth(1)

    await expect(nodes).toHaveCount(6)

    // 删除一些节点
    await page.getByRole('button', { name: '进入编辑' }).click()
    await delBtn.click()
    await delPopover.getByRole('button', { name: '确定' }).click()
    await expect(nodes).toHaveCount(2)

    // 取消编辑后已删除节点重新恢复
    await page.getByRole('button', { name: '取消编辑' }).click()
    await expect(nodes).toHaveCount(6)
  })

  test('保存编辑', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tree#edit')

    const tree = page.locator('#preview .tiny-tree')
    const node = tree.locator('.tiny-tree-node').first()
    const nodeLeft = node.locator('.tiny-tree-node__content-left').first()
    const nodeRight = node.locator('.tiny-tree-node__content-right').first()

    // 编辑节点内容
    await page.getByRole('button', { name: '进入编辑' }).click()
    await nodeRight.getByTitle('编辑').click()
    await nodeLeft.locator('.tiny-input input').fill('aaa')
    await nodeLeft.locator('.tiny-input input').blur()

    // 保存编辑, 检查是否正确保存
    await page.getByRole('button', { name: '保存编辑' }).click()
    await expect(node.locator('.tiny-tree-node__label').first()).toHaveText('aaa')
  })
})
