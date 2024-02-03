import { test, expect } from '@playwright/test'

test('文字超长省略显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#text-ellipsis')

  const wrap = page.locator('#text-ellipsis')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(0)

  await expect(treeMenu.locator('.tiny-tree')).toHaveClass(/tiny-tree-menu__overflow/)
})

test('文字超长换行显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#text-ellipsis')

  const wrap = page.locator('#text-ellipsis')
  const treeMenu = wrap.locator('.tiny-tree-menu').nth(1)

  await expect(treeMenu.locator('.tiny-tree')).toHaveClass(/tiny-tree-menu__wrap/)
})
