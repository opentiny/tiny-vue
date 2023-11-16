import { test, expect } from '@playwright/test'

test('小圆点标记', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#is-dot')

  const preview = page.locator('#preview')
  const badge = preview.locator('.tiny-badge')

  await expect(badge).toHaveClass(/tiny-badge--default/)
  await expect(badge).toHaveCSS('width', '6px')
  await expect(badge).toHaveCSS('height', '6px')
})
