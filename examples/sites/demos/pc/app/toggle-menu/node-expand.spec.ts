import { test, expect } from '@playwright/test'

test('展开节点事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#node-expand')
  // 点击展开
  await page.getByRole('treeitem', { name: '开发指南' }).getByRole('img').click()
  await expect(page.locator('.tiny-modal__box').filter({ hasText: '展开节点后的事件' }).first()).toBeVisible()
  await page.getByRole('treeitem', { name: '表单组件', exact: true }).getByRole('img').click()
  await expect(page.locator('.tiny-modal__box').filter({ hasText: '展开节点后的事件' }).nth(1)).toBeVisible()
})
