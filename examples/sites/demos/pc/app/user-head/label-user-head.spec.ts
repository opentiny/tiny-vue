import { test, expect } from '@playwright/test'

test('文字头像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#label-user-head')
  const minBox = page.locator('.tiny-user-head__portrait')
  await expect(minBox).toHaveText('文字')
})
