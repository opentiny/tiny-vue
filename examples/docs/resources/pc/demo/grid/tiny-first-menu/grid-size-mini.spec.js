import { test, expect } from '@playwright/test'

test('mini', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-grid-size/tiny-first-menu-grid-size-mini')
  const tr = page.locator('.tiny-grid-body__column').first()
  await expect(tr).toHaveCSS('height', '28px')
})
