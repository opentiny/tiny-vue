import { test, expect } from '@playwright/test'

test('关闭时销毁主体元素', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#destroy-on-close')

  const demo = page.locator('#destroy-on-close')
  const drawer = demo.locator('.tiny-drawer__main')

  // 关闭时不销毁
  await demo.locator('label').filter({ hasText: '关闭时不销毁' }).click()
  await demo.getByRole('button', { name: '点击打开抽屉' }).click()
  await expect(drawer).toBeVisible()

  await page.click('.tiny-drawer__mask')
  await expect(drawer).toBeHidden()

  // 关闭时销毁
  await demo.locator('label').filter({ hasText: '关闭时销毁' }).click()
  await demo.getByRole('button', { name: '点击打开抽屉' }).click()
  await expect(drawer).toBeVisible()

  await page.click('.tiny-drawer__mask')
  await expect(drawer).toHaveCount(0)
})
