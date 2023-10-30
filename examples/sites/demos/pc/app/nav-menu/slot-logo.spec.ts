import { test, expect } from '@playwright/test'

test('Logo 插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#slot-logo')
  const preview = page.locator('#preview')
  await expect(preview.locator('.slot-logo svg')).toHaveCount(1)
})
