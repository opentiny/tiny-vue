import { test, expect } from '@playwright/test'

test('通过方法调用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#use-through-method')

  const drawer = page.locator('.tiny-drawer__main')
  await page.getByRole('button', { name: '点击打开抽屉' }).click()
  await expect(drawer).toBeVisible()
  await expect(drawer.locator('.tiny-drawer__header')).toHaveText('这是一个通过方法打开的抽屉')
  await expect(drawer.locator('.tiny-drawer__body')).toHaveText('抽屉主体内容。')
  await drawer.getByRole('button', { name: '点击关闭' }).click()
  await expect(page.locator('.tiny-drawer__main')).not.toBeVisible()
})
