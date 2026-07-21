import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#basic-usage')
  const demo = page.locator('#basic-usage')

  const drawer = demo.locator('.tiny-drawer__main')
  await demo.getByRole('button', { name: '抽屉组件' }).click()
  await expect(drawer).toBeVisible()
  await expect(drawer.locator('.tiny-drawer__header')).toHaveText('标题')
  await expect(drawer.locator('.tiny-drawer__body')).toHaveText('内容区域')
  await drawer.getByRole('button', { name: 'Close' }).click()
  await expect(demo.locator('.tiny-drawer__main')).not.toBeVisible()
})
