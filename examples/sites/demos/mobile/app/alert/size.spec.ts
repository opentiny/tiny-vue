import { test, expect } from '@playwright/test'

test('不同尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#size')

  const alerts = page.locator('#size .tiny-mobile-alert')
  const normalAlert = alerts.first()
  const { height: normalAlertHeight } = await normalAlert.boundingBox()
  const largeAlert = alerts.nth(1)

  await expect(normalAlert).toHaveClass(/tiny-mobile-alert--normal/)
  await expect(normalAlert.locator('.tiny-mobile-alert__content')).toHaveCSS('font-size', '12px')
  await expect(Math.round(normalAlertHeight)).toBe(36)
  await expect(largeAlert).toHaveClass(/tiny-mobile-alert--large/)
  await expect(largeAlert.locator('.tiny-mobile-alert__content')).toHaveCSS('font-size', '16px')
})
