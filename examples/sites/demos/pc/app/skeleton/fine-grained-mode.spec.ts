import { expect, test } from '@playwright/test'

test('形态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#fine-grained-mode')

  const image = page.locator('.tiny-skeleton-item--image')
  const circle = page.locator('.tiny-skeleton-item--circle')
  const square = page.locator('.tiny-skeleton-item--square')

  await expect(image).toBeVisible()
  await expect(circle).toBeVisible()
  await expect(square).toBeVisible()
})
