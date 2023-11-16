import { test, expect } from '@playwright/test'

test('单选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#single-select-radio')

  const node1 = page.getByRole('treeitem', { name: '一级 3' }).first()
  const node2 = page.getByRole('treeitem', { name: '二级 3-1' }).nth(1)

  await expect(node1.locator('.tiny-radio').first()).toBeVisible()

  await node1.click()
  await node2.click()
  await expect(node2.locator('.tiny-radio').first()).toHaveClass(/is-checked/)
  await expect(node1.locator('.tiny-radio').first()).not.toHaveClass(/is-checked/)
})
