import { test, expect } from '@playwright/test'

test('点击节点事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#node-click')
  const preview = page.locator('#preview')
  await preview.getByRole('treeitem', { name: '更新日志' }).locator('div').nth(1).click()
  await expect(page.locator('.tiny-modal__box').filter({ hasText: '点击节点后的事件' })).toBeVisible()
  await preview.getByRole('treeitem', { name: '开发指南' }).locator('div').nth(1).click()
  await expect(page.locator('.tiny-modal__box').filter({ hasText: '点击节点后的事件' }).nth(1)).toBeVisible()
  await page.getByRole('treeitem', { name: '权限' }).locator('div').nth(1).click()
  await expect(page.locator('.tiny-modal__box').filter({ hasText: '点击节点后的事件' }).nth(2)).toBeVisible()
})
