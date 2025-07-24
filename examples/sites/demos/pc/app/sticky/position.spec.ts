import { test, expect } from '@playwright/test'

test('固定位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('sticky#position')

  const demo = page.locator('#position')

  await expect(demo.locator('.tiny-sticky--fixed')).toHaveCSS('bottom', '50px')
})
