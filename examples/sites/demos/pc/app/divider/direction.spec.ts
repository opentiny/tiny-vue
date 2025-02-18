// divider#custom-style
import { test, expect } from '@playwright/test'

test('垂直分割线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#direction')
  const dividerCss = page.locator('.tiny-divider--vertical')
  await expect(dividerCss.first()).toHaveCSS('vertical-align', 'middle')
  await expect(dividerCss.first()).toHaveCSS('border-left', '1px solid rgb(219, 219, 219)')
})
