import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('icon#basic-usage')

  const icons = page.locator('.icon-demo > svg')

  await expect(icons.first()).toHaveCSS('font-size', '48px')

  for (let i = 0; i < 5; i++) {
    await expect(icons.nth(i)).toHaveCSS('width', '48px')
    await expect(icons.nth(i)).toHaveCSS('height', '48px')
  }
})
