import { test, expect } from '@playwright/test'

test('底部显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#show-footer')
  const demo = page.locator('#show-footer')
  const drawerFooter = demo.locator('.tiny-drawer__header')
  await demo.getByRole('button', { name: '显示底部' }).click()
  await expect(drawerFooter).toBeVisible()
})
