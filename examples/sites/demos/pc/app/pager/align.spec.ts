import { test, expect } from '@playwright/test'

test('对齐方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#align')

  const demo = page.locator('#align')
  const pager = demo.locator('.tiny-pager')

  await expect(pager.first()).toHaveCSS('text-align', 'left')
  await expect(pager.nth(1)).toHaveCSS('text-align', 'center')
  await expect(pager.nth(2)).toHaveCSS('text-align', 'right')
})
