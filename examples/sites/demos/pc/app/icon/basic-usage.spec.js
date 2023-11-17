import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('icon#basic-usage')

  await expect(page.locator('.icon-demo > svg').first()).toHaveCSS('font-size', '48px')
})
