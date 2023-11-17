import { test, expect } from '@playwright/test'

test('medium', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-grid-size#tiny-first-menu-grid-size')
  const tr = page.locator('.tiny-grid-body__column').first()
  await expect(tr).toHaveCSS('height', '52px')
})
