import { test, expect } from '@playwright/test'

test('Textpopup 宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('text-popup#width')

  const preview = page.locator('#preview')
  const textPopup = preview.locator('.tiny-text-popup')

  await expect(textPopup).toHaveCSS('width', '500px')
})
