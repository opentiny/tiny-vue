import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#basic-usage')
  const dividerCss = page.locator('.tiny-divider .tiny-divider--default, .tiny-divider.tiny-divider--default')
  await expect(dividerCss).toHaveCSS('border-color', 'rgb(219, 219, 219)')
})
