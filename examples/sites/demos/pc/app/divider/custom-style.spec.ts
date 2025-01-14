// divider#custom-style
import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#custom-style')
  const dividerText = page.locator('.tiny-divider__text')
  const dividerMargin = page.locator('.tiny-divider')
  const dividerLine = page.locator('.tiny-divider-line').first()
  await expect(dividerLine.first()).toHaveCSS('border-color', 'rgb(20, 118, 255)')
  await expect(dividerText.first()).toHaveCSS('color', 'rgb(20, 118, 255)')
  await expect(dividerText.nth(1)).toHaveCSS('background-color', 'rgb(20, 118, 255)')
  await expect(dividerText.nth(2)).toHaveCSS('font-size', '16px')
  await expect(dividerMargin.nth(4)).toHaveCSS('height', '40px')
})
