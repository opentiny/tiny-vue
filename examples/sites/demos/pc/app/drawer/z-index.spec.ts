import { test, expect } from '@playwright/test'

test('自定义堆叠顺序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#z-index')

  const drawer = page.locator('.tiny-drawer__main')
  await page.getByRole('button', { name: '自定义z-index' }).click()
  await expect(drawer).toHaveCSS('z-index', '3000')
})
