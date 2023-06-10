import { test, expect } from '@playwright/test'

test('边框基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-grid-border/tiny-first-menu-grid-border')
  const grid = page.locator('.tiny-grid')
  await expect(grid).toHaveClass(/tiny-grid__border/)
})
