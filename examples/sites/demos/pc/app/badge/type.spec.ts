import { test, expect } from '@playwright/test'

test('主題样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#type')

  const preview = page.locator('#preview')
  const badge = preview.locator('.tiny-badge')
  const dangerBadge = badge.nth(1)
  const primaryBadge = badge.nth(2)
  const successBadge = badge.nth(3)
  const warningBadge = badge.nth(4)
  const infoBadge = badge.nth(5)

  await expect(dangerBadge).toHaveClass(/tiny-badge--danger/)
  await expect(dangerBadge).toHaveCSS('background-color', 'rgb(246, 111, 106)')
  await expect(primaryBadge).toHaveClass(/tiny-badge--primary/)
  await expect(primaryBadge).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  await expect(successBadge).toHaveClass(/tiny-badge--success/)
  await expect(successBadge).toHaveCSS('background-color', 'rgb(80, 212, 171)')
  await expect(warningBadge).toHaveClass(/tiny-badge--warning/)
  await expect(warningBadge).toHaveCSS('background-color', 'rgb(250, 152, 65)')
  await expect(infoBadge).toHaveClass(/tiny-badge--info/)
  await expect(infoBadge).toHaveCSS('background-color', 'rgb(37, 43, 58)')
})
