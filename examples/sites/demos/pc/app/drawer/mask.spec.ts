import { test, expect } from '@playwright/test'

test('遮罩层显示隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#mask')

  const drawer = page.locator('#preview .tiny-drawer')
  const mask = drawer.locator('.tiny-drawer__mask')
  await page.getByRole('button', { name: '关闭遮罩层' }).click()
  await expect(mask).not.toBeVisible()
})
