import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#size')

  const demo = page.locator('#size')
  const smallLoading = demo.locator('.tiny-loading__spinner-small')
  const mediumLoading = demo.locator('.tiny-loading__spinner-medium')
  const largeLoading = demo.locator('.tiny-loading__spinner-large')
  await expect(smallLoading).toBeVisible()
  await expect(mediumLoading).toBeVisible()
  await expect(largeLoading).toBeVisible()
})
