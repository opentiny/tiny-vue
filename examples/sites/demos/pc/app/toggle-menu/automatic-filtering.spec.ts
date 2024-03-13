import { test, expect } from '@playwright/test'

test('自动过滤', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#automatic-filtering')
  await page.getByRole('textbox', { name: '请输入过滤值' }).click()
  await page.getByRole('textbox', { name: '请输入过滤值' }).fill('组件')
  await page.locator('.tiny-toggle-menu__filter-search > .tiny-svg').click()
  await page.getByRole('treeitem', { name: '引入组件' }).locator('div').nth(3).click()
  await expect(page.locator('.tiny-tree-node__content').first()).toContainText('组件')
})
