import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#size')

  const largeAlert = page.locator('.tiny-alert').nth(1)
  await expect(largeAlert).toHaveClass(/tiny-alert--large/)
  await expect(largeAlert).toHaveCSS('height', '68px')
})
