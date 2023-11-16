import { test, expect } from '@playwright/test'

test('节点选中状态发生变化时的回调', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-check-change')

  const checkBox = page.getByRole('treeitem', { name: '首页' }).locator('span').nth(2)

  // 选中节点
  await checkBox.click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '节点-首页被选中了' })).toBeVisible()

  // 取消选中
  await checkBox.click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '节点-首页被取消了' })).toBeVisible()
})
