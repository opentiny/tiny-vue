import { test, expect } from '@playwright/test'

test('表尾对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-align#align-footer-align')
  const demo = page.locator('#align-footer-align')
  await expect(demo.locator('.tiny-grid-footer__column').filter({ hasText: '和值' })).toHaveCSS('text-align', 'left')
  await expect(demo.locator('.tiny-grid-footer__column').filter({ hasText: '5310' })).toHaveCSS('text-align', 'right')
  await expect(demo.locator('.tiny-grid-footer__column').filter({ hasText: '57000' })).toHaveCSS('text-align', 'center')
})
