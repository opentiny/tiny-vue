import { test, expect } from '@playwright/test'

test('小头像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#min-user-head')
  const minBox = page.locator('.tiny-user-head__portrait.min')
  await expect(minBox).toHaveCSS('width', '30px')
  await expect(minBox).toHaveCSS('height', '30px')
})
