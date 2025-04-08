import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#basic-usage')
  const demo = page.locator('#basic-usage')
  const dividerClass = demo.locator('.tiny-divider .tiny-divider--default, .tiny-divider.tiny-divider--default')
  await expect(dividerClass).toHaveCSS('border-color', 'rgb(240, 240, 240)')
})
