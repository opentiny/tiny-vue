import { expect, test } from '@playwright/test'

test('段落行数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#custom-rows')

  const first = page.locator('.tiny-skeleton')
  const item = page.locator('.tiny-skeleton-item')

  await expect(first).toHaveCount(1)
  await expect(item).toHaveCount(5)
})
