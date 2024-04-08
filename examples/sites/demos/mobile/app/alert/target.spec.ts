import { test, expect } from '@playwright/test'

test('文字居中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#target')

  const alert = page.locator('#target .tiny-mobile-alert')
})
