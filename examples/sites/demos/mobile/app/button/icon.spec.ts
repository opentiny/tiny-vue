import { test, expect } from '@playwright/test'

test('自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#icon')

  const buttons = page.locator('#icon .tiny-mobile-button')

  await expect(buttons.first()).toHaveClass(/tiny-mobile-button--icon/)
  await expect(buttons.first().locator('.is-icon')).toBeVisible()

  await expect(buttons.nth(1)).toHaveClass(/tiny-mobile-button--icon/)
  await expect(buttons.nth(1).locator('.is-icon')).toBeVisible()
  await expect(buttons.nth(1).locator('span')).toBeVisible()
})
