import { test, expect } from '@playwright/test'

test('tree组件基本使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#basic-usage')

  const tree = page.locator('#preview .tiny-tree')
  await tree.getByText('一级 1').click()
  await expect(tree.locator('.tiny-tree-node').first()).toHaveClass(/is-current/)
  await page.getByText('二级 1-1').click()
  await expect(tree.locator('.tiny-tree-node').nth(1)).toHaveClass(/is-current/)
  await page.getByRole('treeitem', { name: '三级 1-1-1' }).first().click()
  await page.getByRole('treeitem', { name: '一级 3' }).locator('.tiny-svg').click()
  await page
    .getByRole('treeitem', { name: '一级 1' })
    .first()
    .locator('div')
    .filter({ hasText: '一级 1' })
    .first()
    .click()
  await expect(page.getByRole('treeitem', { name: '一级 1-1', includeHidden: true })).toBeHidden({ timeout: 0 })
  await page.locator('.tiny-modal__box').first().click()
})
