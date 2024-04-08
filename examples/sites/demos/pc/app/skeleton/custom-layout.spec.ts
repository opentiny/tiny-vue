import { expect, test } from '@playwright/test'

test('样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#custom-layout')

  const image = page.locator('.tiny-skeleton-item')

  await expect(image.nth(0)).toHaveCSS('width', '200px')
  await expect(image.nth(1)).toHaveCSS('height', '100px')
})
