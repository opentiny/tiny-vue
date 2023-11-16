import { test, expect } from '@playwright/test'

test.describe('平铺模式下的props和事件', () => {
  test('视图模式 viewType', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tree#plain-mode')

    const tree = page.locator('#preview .tiny-tree')
    const plainNodes = tree.locator('.tiny-tree__plain-node')
    await page.getByRole('textbox', { name: '输入关键字进行搜索' }).fill('1')
    const plainNodeCount = await plainNodes.count()
    expect(plainNodeCount).toBeGreaterThan(1)
    await expect(plainNodes.first()).not.toHaveClass(/tiny-tree-node/)
    await expect(plainNodes.first().locator('.tiny-tree__plain-node-title-txt')).toHaveText('一级 1')
    await expect(plainNodes.first().locator('.tiny-tree__plain-node-title .tiny-checkbox')).toBeVisible()
    await expect(plainNodes.nth(3).locator('.tiny-tree__plain-node-auxi')).toHaveText('一级 1/二级 1-1')
  })

  test('节点勾选事件 check-plain', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tree#plain-mode')

    const tree = page.locator('#preview .tiny-tree')
    const plainNode = tree.locator('.tiny-tree__plain-node').first()
    const checkbox = plainNode.locator('.tiny-checkbox')
    const checkedMsg = page.locator('.tiny-modal').filter({ hasText: '勾选节点一级 1' })
    const uncheckedMsg = page.locator('.tiny-modal').filter({ hasText: '取消勾选节点一级 1' })

    await page.getByRole('textbox', { name: '输入关键字进行搜索' }).fill('1')
    await checkbox.click()
    await expect(checkedMsg).toBeVisible()
    await checkbox.click()
    await expect(uncheckedMsg).toBeVisible()
  })

  test('点击定位图标事件 leave-plain-view', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tree#plain-mode')

    const tree = page.locator('#preview .tiny-tree')
    const plainNode = tree.locator('.tiny-tree__plain-node').first()
    const markIcon = plainNode.locator('.tiny-tree__plain-node-title-loc > .tiny-svg')

    await page.getByRole('textbox', { name: '输入关键字进行搜索' }).fill('1')
    await expect(plainNode).toBeVisible()
    await plainNode.locator('.tiny-checkbox').click()
    await markIcon.click()
    await expect(plainNode).not.toBeVisible()
    await expect(tree.locator('.tiny-tree-node').first()).toBeVisible()
    await expect(tree.locator('.tiny-tree-node').first().locator('.tiny-checkbox').first()).toHaveClass(/is-checked/)
  })
})
