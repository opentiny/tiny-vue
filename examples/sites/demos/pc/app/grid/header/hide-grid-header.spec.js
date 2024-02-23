import { test, expect } from '@playwright/test'

test('控制隐藏表头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-header#header-hide-grid-header')
  await expect(page.locator('.tiny-grid__header')).toHaveCount(0)
})
