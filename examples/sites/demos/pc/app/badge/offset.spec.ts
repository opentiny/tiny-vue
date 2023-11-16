import { test, expect } from '@playwright/test'

test('标记的位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#offset')

  const preview = page.locator('#preview')
  const badge = preview.locator('.tiny-badge')

  await expect(badge.first()).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, -10)')
  await expect(badge.nth(1)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, -10)')
})
