import { test, expect } from '@playwright/test'

test('主題样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#type')

  const demo = page.locator('#type')
  const badge = demo.locator('.tiny-badge')
  const successBadge = badge.nth(1)
  const warningBadge = badge.nth(2)
  const infoBadge = badge.nth(3)
  const dangerBadge = badge.nth(4)
  const primaryBadge = badge.nth(5)

  await expect(dangerBadge).toHaveClass(/tiny-badge--danger/)
  await expect(dangerBadge).toHaveCSS('background-color', 'rgb(246, 111, 106)')
  await expect(primaryBadge).toHaveClass(/tiny-badge--primary/)
  await expect(primaryBadge).toHaveCSS('background-color', 'rgb(25, 25, 25)')
  await expect(successBadge).toHaveClass(/tiny-badge--success/)
  await expect(successBadge).toHaveCSS('background-color', 'rgb(92, 179, 0)')
  await expect(warningBadge).toHaveClass(/tiny-badge--warning/)
  await expect(warningBadge).toHaveCSS('background-color', 'rgb(255, 136, 0)')
  await expect(infoBadge).toHaveClass(/tiny-badge--info/)
  await expect(infoBadge).toHaveCSS('background-color', 'rgb(25, 25, 25)')
})
