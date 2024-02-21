import { test, expect } from '@playwright/test'

test('图标头像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#icon-user-head')
  const minBox = page.locator('.tiny-user-head > .tiny-user-head__portrait')
  await expect(minBox).toHaveCSS('background-image', 'none')
})
