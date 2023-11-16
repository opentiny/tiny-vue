import { test, expect } from '@playwright/test'

test('展开节点事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#node-expand')
  const preview = page.locator('#preview')
  // 点击展开
  await preview.getByTitle('开发指南').click()
  await expect(page.locator('.tiny-modal__box').filter({ hasText: '展开节点后的事件' }).first()).toBeVisible()
  await preview.getByTitle('表单组件').click()
  await expect(page.locator('.tiny-modal__box').filter({ hasText: '展开节点后的事件' }).nth(1)).toBeVisible()
})
