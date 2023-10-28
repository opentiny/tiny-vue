import { test, expect } from '@playwright/test'

test('垂直布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#vertical')
  const radioGroup = page.locator('.list-inline')
  await expect(radioGroup).toBeVisible()
  await expect(radioGroup).toHaveCSS('flex-direction', 'column')
})
