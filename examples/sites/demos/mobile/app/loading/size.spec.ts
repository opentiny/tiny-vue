import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('loading#size')

  const loadings = page.locator('#size .tiny-mobile-loading')

  // mini
  const miniLoading = loadings.first()
  await expect(miniLoading.locator('.tiny-mobile-loading__body')).toHaveClass(/tiny-mobile-loading-mini/)
  await expect(miniLoading.locator('.tiny-mobile-loading__body')).toHaveCSS('flex-direction', 'row')
  await expect(miniLoading.locator('.tiny-mobile-loading__icon')).toHaveCSS('width', '14px')
  await expect(miniLoading.locator('.tiny-mobile-loading__icon')).toHaveCSS('height', '14px')

  // small
  const smallLoading = loadings.nth(1)
  await expect(smallLoading.locator('.tiny-mobile-loading__body')).toHaveClass(/tiny-mobile-loading-small/)
  await expect(smallLoading.locator('.tiny-mobile-loading__body')).toHaveCSS('flex-direction', 'column')
  await expect(smallLoading.locator('.tiny-mobile-loading__icon')).toHaveCSS('width', '24px')
  await expect(smallLoading.locator('.tiny-mobile-loading__icon')).toHaveCSS('height', '24px')

  // medium
  const mediumLoading = loadings.nth(2)
  await expect(mediumLoading.locator('.tiny-mobile-loading__body')).toHaveClass(/.tiny-mobile-loading-medium/)
  await expect(mediumLoading.locator('.tiny-mobile-loading__body')).toHaveCSS('flex-direction', 'column')
  await expect(mediumLoading.locator('.tiny-mobile-loading__icon')).toHaveCSS('width', '40px')
  await expect(mediumLoading.locator('.tiny-mobile-loading__icon')).toHaveCSS('height', '40px')

  // large
  const largeLoading = loadings.nth(3)
  await expect(largeLoading.locator('.tiny-mobile-loading__body')).toHaveClass(/tiny-mobile-loading-large/)
  await expect(largeLoading.locator('.tiny-mobile-loading__body')).toHaveCSS('flex-direction', 'column')
  await expect(largeLoading.locator('.tiny-mobile-loading__icon')).toHaveCSS('width', '96px')
  await expect(largeLoading.locator('.tiny-mobile-loading__icon')).toHaveCSS('height', '96px')
})
