import { test, expect } from '@playwright/test'

test('计数最大值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#max')

  const demo = page.locator('#max')
  const badge = demo.locator('.tiny-badge').first()

  await expect(badge).toContainText('9+')
})
