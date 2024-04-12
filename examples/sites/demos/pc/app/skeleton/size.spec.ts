import { expect, test } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#size')

  const small = page.locator('.tiny-skeleton-item--small')
  const medium = page.locator('.tiny-skeleton-item--medium')
  const large = page.locator('.tiny-skeleton-item--large')

  await expect(small).toBeVisible()
  await expect(medium).toBeVisible()
  await expect(large).toBeVisible()
})
