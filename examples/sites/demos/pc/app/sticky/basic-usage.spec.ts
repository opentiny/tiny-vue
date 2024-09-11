import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('sticky#basic-usage')

  const demo = page.locator('#basic-usage')

  await demo.locator('i').first().scrollIntoViewIfNeeded()
  await expect(demo.locator('.tiny-sticky--fixed')).toHaveCSS('top', '0px')
})
