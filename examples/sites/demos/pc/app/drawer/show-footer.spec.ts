import { test, expect } from '@playwright/test'

test('底部显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#show-footer')

  const drawerFooter = page.locator('.tiny-drawer__header')

  await page.getByRole('button', { name: '显示底部' }).click()
  await expect(drawerFooter).toBeVisible()
})
