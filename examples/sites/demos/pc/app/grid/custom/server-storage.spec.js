import { test, expect } from '@playwright/test'

test('服务端存储', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom#custom-server-storage')
  await expect(page.locator('.tiny-grid-header__column').nth(3)).toContainText('公司简介')
})
