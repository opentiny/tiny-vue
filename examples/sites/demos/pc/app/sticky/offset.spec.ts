import { test, expect } from '@playwright/test'

test('偏移距离', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('sticky#offset')

  const demo = page.locator('#offset')

  await demo.locator('i').first().scrollIntoViewIfNeeded()
  await page.waitForTimeout(200)
  await demo.locator('i').nth(2).scrollIntoViewIfNeeded()
  await expect(demo.locator('.tiny-sticky--fixed')).toHaveCSS('top', '100px')
})
