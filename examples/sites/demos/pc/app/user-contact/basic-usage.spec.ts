import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-contact#basic-usage')
  const partBox = page.locator('.dropdown-part')
  await partBox.hover()
  const dialogBox = page.locator('.tiny-user-contact__title')
  await expect(dialogBox).toBeVisible()
})
