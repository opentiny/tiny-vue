import { test, expect } from '@playwright/test'

test('点击遮罩层不关闭', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#mask-closable')
  const demo = page.locator('#mask-closable')
  const drawer = demo.locator('.tiny-drawer__main')
  await demo.getByRole('button', { name: '单击遮罩层不关闭抽屉' }).click()
  await demo.locator('.tiny-drawer__mask').click()
  await expect(drawer).toBeVisible()
})
