import { test, expect } from '@playwright/test'

test('小尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#size')

  const container = page.locator('#size')
  const headerBox = container.locator('.tiny-tabs .tiny-tabs__nav-scroll')

  await expect(headerBox.nth(0)).toHaveCSS('height', '40px')
  await expect(headerBox.nth(0)).toHaveCSS('font-size', '16px')
  await expect(headerBox.nth(1)).toHaveCSS('height', '24px')
  await expect(headerBox.nth(1).locator('.tiny-tabs__item').first()).toHaveCSS('font-size', '14px')
  await expect(headerBox.nth(2)).toHaveCSS('height', '24px')
  await expect(headerBox.nth(2).locator('.tiny-tabs__item').first()).toHaveCSS('font-size', '12px')
})
