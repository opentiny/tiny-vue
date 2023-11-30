import { test, expect } from '@playwright/test'

test('垂直布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#vertical')
  const radioGroup = page.locator('.list-inline')
  await expect(radioGroup.first()).toBeVisible()
  await expect(radioGroup.first()).toHaveCSS('flex-direction', 'column')
  await expect(radioGroup.nth(1)).toBeVisible()
  await expect(radioGroup.nth(1)).toHaveCSS('flex-direction', 'column')
})
