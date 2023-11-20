import { test, expect } from '@playwright/test'

test('跳转链接', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#target')

  const preview = page.locator('#preview')
  const badge = preview.locator('.tiny-badge')

  await expect(badge.first().locator('a')).toBeVisible()
  await expect(badge.first().locator('a')).toContainText('2')
  await expect(badge.first().locator('a')).toHaveAttribute('href', '/')
  await expect(badge.first().locator('a')).toHaveAttribute('target', '_self')
  await expect(badge.nth(1).locator('a')).toBeVisible()
  await expect(badge.nth(1).locator('a')).toContainText('2')
  await expect(badge.nth(1).locator('a')).toHaveAttribute('href', '/')
  await expect(badge.nth(1).locator('a')).toHaveAttribute('target', '_blank')
})
