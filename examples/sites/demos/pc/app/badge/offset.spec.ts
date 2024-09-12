import { test, expect } from '@playwright/test'

test('标记的位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#offset')

  const demo = page.locator('#offset')
  const badge = demo.locator('div').filter({ hasText: /^2$/ }).first()
  const badge2 = demo.locator('div').filter({ hasText: /^2$/ }).nth(1)

  await expect(badge).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, -8)')
  await expect(badge2).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, -8)')
})
