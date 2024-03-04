import { expect, test } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#size')

  const search = page.locator('.tiny-search')

  await expect(search).toHaveCount(0)
})
