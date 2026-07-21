import { test, expect } from '@playwright/test'

test('头部显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#show-header')

  const demo = page.locator('#show-header')
  const drawerHeader = demo.locator('.tiny-drawer__header')

  await demo.getByRole('button', { name: '隐藏头部' }).click()
  await expect(drawerHeader).not.toBeVisible()
})
