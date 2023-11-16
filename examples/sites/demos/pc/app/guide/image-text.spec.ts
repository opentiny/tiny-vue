import { test, expect } from '@playwright/test'

test('图文结合用户引导', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#image-text')

  const guide = page.locator('.tiny-guide')

  await expect(guide).toHaveCount(1)
})
