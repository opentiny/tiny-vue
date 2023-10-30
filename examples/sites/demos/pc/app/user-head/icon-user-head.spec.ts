import { test, expect } from '@playwright/test'

test('图片头像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#image-user-head')
  const minBox = page.locator('.tiny-user-head__portrait')
  await expect(minBox).toHaveCSS('background-image', 'none')
})
