import { test, expect } from '@playwright/test'

test('分割线类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#divider-type')
  const dividerText = page.locator('.tiny-divider--default')
  await expect(dividerText.first()).toHaveCSS('border-top-style', 'solid')
  await expect(dividerText.nth(1)).toHaveCSS('border-top-style', 'dashed')
  await expect(dividerText.nth(2)).toHaveCSS('border-top-style', 'dotted')
})
