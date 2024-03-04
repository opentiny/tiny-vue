import { test, expect } from '@playwright/test'

test('收缩节点事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#node-collapse')
  // 点击展开
  await page.getByTitle('开发指南').click()
  // 点击收起
  await page.getByTitle('开发指南').click()
  await expect(page.locator('.tiny-modal__box').filter({ hasText: '收缩节点后的事件' })).toBeVisible()
})
