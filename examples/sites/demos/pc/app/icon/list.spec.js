import { test, expect } from '@playwright/test'

test('图标集', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('icon#list')

  const icons = page.locator('.svgs-item > .tiny-svg')

  for (let i = 0; i < 10; i++) {
    await expect(icons.nth(i)).toHaveCSS('width', '24px')
    await expect(icons.nth(i)).toHaveCSS('height', '24px')
  }
})
