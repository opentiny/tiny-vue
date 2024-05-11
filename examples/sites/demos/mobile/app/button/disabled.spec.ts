import { test, expect } from '@playwright/test'

test('禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#disabled')

  const button = page.locator('#disabled .tiny-mobile-button').first()

  await expect(button).toHaveClass(/is-disabled/)
  await expect(button).toHaveCSS('background-color', 'rgb(240, 240, 240)')
  await expect(button).toHaveCSS('color', 'rgb(194, 194, 194)')
  await expect(button).toHaveCSS('cursor', 'not-allowed')
})
