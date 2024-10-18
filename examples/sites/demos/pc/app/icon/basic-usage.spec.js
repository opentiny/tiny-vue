import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('icon#basic-usage')

  const demo = page.locator('#basic-usage')

  const icons = demo.locator('.icon-demo > svg')

  await expect(icons.first()).toHaveCSS('font-size', '24px')

  for (let i = 0; i < 5; i++) {
    await expect(icons.nth(i)).toHaveCSS('width', '24px')
    await expect(icons.nth(i)).toHaveCSS('height', '24px')
  }
})
