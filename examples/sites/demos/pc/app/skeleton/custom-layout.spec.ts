import { expect, test } from '@playwright/test'

test('自定义排版', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#custom-layout')

  const image = page.locator('.tiny-skeleton-item--image')
  const circle = page.locator('.tiny-skeleton-item--circle')

  await expect(image).toHaveCount(1)
  await expect(circle).toHaveCount(1)
  await expect(circle).toHaveClass(/tiny-skeleton-item--small/)
  await expect(image).toHaveCSS('width', '200px')
})
