import { test, expect } from '@playwright/test'

test('logon-user-custom-service', async ({ page }) => {
  await page.goto('logon-user#custom-service')
  const user = page.locator('.tiny-logon-user')

  await expect(user).toHaveText('test1')
})
