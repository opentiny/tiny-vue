import { test, expect } from '@playwright/test'

test('父子级不相关联', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tree-menu/check-strictly')

  // 父节点勾选不会改变子节点
  await page.getByRole('treeitem', { name: '指南', exact: true }).getByRole('img').first().click()
  await expect(page.getByRole('treeitem', { name: '引入组件' }).locator('span').nth(1)).not.toHaveClass(/is-checked/)
  await expect(page.getByRole('treeitem', { name: '构建部署' }).locator('span').nth(1)).not.toHaveClass(/is-checked/)

  // 子节点勾选不改变父节点
  await page.getByRole('treeitem', { name: '引入组件' }).click()
  await page.getByRole('treeitem', { name: '按需引入' }).locator('span').nth(2).click()
  await page.getByRole('treeitem', { name: '完整引入' }).locator('span').nth(2).click()
  await expect(page.getByRole('treeitem', { name: '引入组件' }).locator('span').nth(1)).not.toHaveClass(/is-checked/)
})