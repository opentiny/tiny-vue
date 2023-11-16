import { test, expect } from '@playwright/test'

test('圆形头像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#round-user-head')
  const minBox = page.locator('.tiny-user-head__portrait')
  await expect(minBox).toHaveCSS('border-radius', '50%')
})
