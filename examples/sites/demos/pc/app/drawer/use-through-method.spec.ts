import { test, expect } from '@playwright/test'

test('通过方法调用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#use-through-method')
  const demo = page.locator('#use-through-method')
  const drawer = page.locator('.tiny-drawer__title')
  await demo.getByRole('button', { name: '点击打开抽屉' }).click()
  await expect(drawer.nth(2)).toHaveText('这是一个通过方法打开的抽屉')
  await expect(demo.locator('.tiny-drawer__main')).not.toBeVisible()
})
