import { test, expect } from '@playwright/test'

test('圆形头像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/user-head/round-user-head')
  const minBox = page.locator('.tiny-user-head__portrait')
  await expect(minBox).toHaveCSS('border-radius', '50%')
})
