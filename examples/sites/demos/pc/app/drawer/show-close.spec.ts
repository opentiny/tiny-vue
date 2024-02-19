import { test, expect } from '@playwright/test'

test('关闭图标显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#show-close')

  // 测试隐藏关闭图标
  const drawer = page.locator('.tiny-drawer__main')
  await page.getByRole('button', { name: '隐藏关闭图标' }).click()
  await expect(drawer.getByRole('button', { name: 'Close' })).not.toBeVisible()
})
