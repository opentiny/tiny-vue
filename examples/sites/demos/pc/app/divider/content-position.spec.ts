import { test, expect } from '@playwright/test'

test('分割线文案位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#content-position')
  const left = page.locator('.tiny-divider__text')
  await expect(left.first()).toHaveCSS('left', '133px')
  await expect(left.nth(1)).toHaveCSS('left', '304.5px')
  await expect(left.nth(2)).toHaveCSS('right', '80px')
})
